package main

import (
	"context"
	"embed"
	"errors"
	"fmt"
	"io/fs"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"path"
	"strings"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"go.opentelemetry.io/contrib/bridges/otelslog"
	"go.opentelemetry.io/contrib/instrumentation/github.com/gin-gonic/gin/otelgin"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/exporters/otlp/otlplog/otlploghttp"
	"go.opentelemetry.io/otel/exporters/otlp/otlpmetric/otlpmetrichttp"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp"
	"go.opentelemetry.io/otel/metric"
	sdklog "go.opentelemetry.io/otel/sdk/log"
	sdkmetric "go.opentelemetry.io/otel/sdk/metric"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
)

//go:embed all:web/dist
var frontend embed.FS

func main() {
	if err := run(); err != nil {
		slog.Error("server stopped", "error", err)
		os.Exit(1)
	}
}

func run() (runErr error) {
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	serviceName := os.Getenv("OTEL_SERVICE_NAME")
	if serviceName == "" {
		serviceName = "modulo-gin"
	}

	shutdownTelemetry, err := initTelemetry(ctx, serviceName)
	if err != nil {
		return fmt.Errorf("initialize OpenTelemetry: %w", err)
	}
	defer func() {
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		if err := shutdownTelemetry(shutdownCtx); err != nil {
			runErr = errors.Join(runErr, fmt.Errorf("shutdown OpenTelemetry: %w", err))
		}
	}()

	requestCount, err := otel.Meter("modulo-gin").Int64Counter(
		"http.server.request.count",
		metric.WithDescription("Number of completed HTTP server requests."),
	)
	if err != nil {
		return fmt.Errorf("create HTTP request counter: %w", err)
	}
	requestDuration, err := otel.Meter("modulo-gin").Float64Histogram(
		"http.server.request.duration",
		metric.WithUnit("s"),
		metric.WithDescription("Duration of completed HTTP server requests."),
	)
	if err != nil {
		return fmt.Errorf("create HTTP request duration histogram: %w", err)
	}

	r := gin.Default()
	r.Use(otelgin.Middleware(serviceName))
	r.Use(httpMetricsMiddleware(requestCount, requestDuration))

	// Obtain the embedded distribution filesystem.
	distFS, err := fs.Sub(frontend, "web/dist")
	if err != nil {
		return fmt.Errorf("open embedded frontend: %w", err)
	}

	indexHTML, err := fs.ReadFile(distFS, "index.html")
	if err != nil {
		return fmt.Errorf("read embedded frontend index: %w", err)
	}

	api := r.Group("/api/v1")
	{
		api.GET("/health", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{"status": "ok"})
		})
	}

	r.GET("/assets/*filepath", func(c *gin.Context) {
		assetPath := path.Clean(path.Join("assets", strings.TrimPrefix(c.Param("filepath"), "/")))
		if !fs.ValidPath(assetPath) {
			c.Status(http.StatusNotFound)
			return
		}
		c.FileFromFS("/"+assetPath, http.FS(distFS))
	})

	r.NoRoute(func(c *gin.Context) {
		requestPath := strings.TrimPrefix(c.Request.URL.Path, "/")

		if strings.HasPrefix(requestPath, "api/") {
			c.JSON(http.StatusNotFound, gin.H{"error": "Not found"})
			return
		}

		if requestPath != "" && requestPath != "index.html" {
			if _, err := fs.Stat(distFS, requestPath); err == nil {
				c.FileFromFS("/"+requestPath, http.FS(distFS))
				return
			}
		}

		c.Data(http.StatusOK, "text/html; charset=utf-8", indexHTML)
	})

	addr := os.Getenv("HTTP_ADDR")
	if addr == "" {
		addr = ":8080"
	}

	server := &http.Server{
		Addr:              addr,
		Handler:           r,
		ReadHeaderTimeout: 5 * time.Second,
	}

	serverErr := make(chan error, 1)
	go func() {
		serverErr <- server.ListenAndServe()
	}()

	select {
	case err := <-serverErr:
		if !errors.Is(err, http.ErrServerClosed) {
			return fmt.Errorf("serve HTTP: %w", err)
		}
	case <-ctx.Done():
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()
		if err := server.Shutdown(shutdownCtx); err != nil {
			return fmt.Errorf("shutdown HTTP server: %w", err)
		}
	}

	return nil
}

func initTelemetry(ctx context.Context, serviceName string) (func(context.Context) error, error) {
	res := resource.NewWithAttributes(
		"",
		attribute.String("service.name", serviceName),
		attribute.String("telemetry.sdk.language", "go"),
	)

	var traceOptions []otlptracehttp.Option
	if endpoint := defaultOTLPHTTPURL("traces", "OTEL_EXPORTER_OTLP_TRACES_ENDPOINT"); endpoint != "" {
		traceOptions = append(traceOptions, otlptracehttp.WithEndpointURL(endpoint))
	}
	traceExporter, err := otlptracehttp.New(ctx, traceOptions...)
	if err != nil {
		return nil, fmt.Errorf("create OTLP trace exporter: %w", err)
	}

	var metricOptions []otlpmetrichttp.Option
	if endpoint := defaultOTLPHTTPURL("metrics", "OTEL_EXPORTER_OTLP_METRICS_ENDPOINT"); endpoint != "" {
		metricOptions = append(metricOptions, otlpmetrichttp.WithEndpointURL(endpoint))
	}
	metricExporter, err := otlpmetrichttp.New(ctx, metricOptions...)
	if err != nil {
		return nil, errors.Join(
			fmt.Errorf("create OTLP metric exporter: %w", err),
			traceExporter.Shutdown(ctx),
		)
	}

	var logOptions []otlploghttp.Option
	if endpoint := defaultOTLPHTTPURL("logs", "OTEL_EXPORTER_OTLP_LOGS_ENDPOINT"); endpoint != "" {
		logOptions = append(logOptions, otlploghttp.WithEndpointURL(endpoint))
	}
	logExporter, err := otlploghttp.New(ctx, logOptions...)
	if err != nil {
		return nil, errors.Join(
			fmt.Errorf("create OTLP log exporter: %w", err),
			metricExporter.Shutdown(ctx),
			traceExporter.Shutdown(ctx),
		)
	}

	traceProvider := sdktrace.NewTracerProvider(
		sdktrace.WithBatcher(traceExporter),
		sdktrace.WithResource(res),
	)
	meterProvider := sdkmetric.NewMeterProvider(
		sdkmetric.WithReader(sdkmetric.NewPeriodicReader(metricExporter, sdkmetric.WithInterval(15*time.Second))),
		sdkmetric.WithResource(res),
	)
	loggerProvider := sdklog.NewLoggerProvider(
		sdklog.WithProcessor(sdklog.NewBatchProcessor(logExporter)),
		sdklog.WithResource(res),
	)

	otel.SetTracerProvider(traceProvider)
	otel.SetMeterProvider(meterProvider)
	otel.SetLoggerProvider(loggerProvider)
	slog.SetDefault(slog.New(multiHandler{
		slog.NewTextHandler(os.Stdout, nil),
		otelslog.NewHandler("modulo-gin", otelslog.WithLoggerProvider(loggerProvider)),
	}))

	return func(ctx context.Context) error {
		return errors.Join(
			traceProvider.Shutdown(ctx),
			meterProvider.Shutdown(ctx),
			loggerProvider.Shutdown(ctx),
		)
	}, nil
}

func defaultOTLPHTTPURL(signal, signalEndpointEnv string) string {
	if os.Getenv("OTEL_EXPORTER_OTLP_ENDPOINT") != "" || os.Getenv(signalEndpointEnv) != "" {
		return ""
	}
	return "http://localhost:4318/v1/" + signal
}

func httpMetricsMiddleware(requestCount metric.Int64Counter, requestDuration metric.Float64Histogram) gin.HandlerFunc {
	logger := slog.Default()

	return func(c *gin.Context) {
		start := time.Now()
		c.Next()

		route := c.FullPath()
		if route == "" {
			route = "unmatched"
		}

		duration := time.Since(start)
		attrs := []attribute.KeyValue{
			attribute.String("http.request.method", c.Request.Method),
			attribute.String("http.route", route),
			attribute.Int("http.response.status_code", c.Writer.Status()),
		}
		ctx := c.Request.Context()
		requestCount.Add(ctx, 1, metric.WithAttributes(attrs...))
		requestDuration.Record(ctx, duration.Seconds(), metric.WithAttributes(attrs...))
		logger.InfoContext(ctx, "HTTP request",
			"http.request.method", c.Request.Method,
			"http.route", route,
			"http.response.status_code", c.Writer.Status(),
			"duration_ms", duration.Milliseconds(),
		)
	}
}

type multiHandler []slog.Handler

func (h multiHandler) Enabled(ctx context.Context, level slog.Level) bool {
	for _, handler := range h {
		if handler.Enabled(ctx, level) {
			return true
		}
	}
	return false
}

func (h multiHandler) Handle(ctx context.Context, record slog.Record) error {
	var errs []error
	for _, handler := range h {
		if handler.Enabled(ctx, record.Level) {
			if err := handler.Handle(ctx, record.Clone()); err != nil {
				errs = append(errs, err)
			}
		}
	}
	return errors.Join(errs...)
}

func (h multiHandler) WithAttrs(attrs []slog.Attr) slog.Handler {
	handlers := make(multiHandler, len(h))
	for i, handler := range h {
		handlers[i] = handler.WithAttrs(attrs)
	}
	return handlers
}

func (h multiHandler) WithGroup(name string) slog.Handler {
	handlers := make(multiHandler, len(h))
	for i, handler := range h {
		handlers[i] = handler.WithGroup(name)
	}
	return handlers
}
