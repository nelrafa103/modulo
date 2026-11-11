package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func RenderHome(home map[string]any) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"home": home,
		})
	}
}
