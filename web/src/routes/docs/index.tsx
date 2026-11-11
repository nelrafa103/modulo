
import Logo from "../../assets/614d1097-0a5e-4738-8119-975b124dd369.webp"
import Button from "../../components/button";

const sections = [
    { id: "overview", label: "Overview" },
    { id: "quickstart", label: "Getting started" },
    { id: "api", label: "REST API" },
    { id: "sdk", label: "Python SDK" },
    { id: "limits", label: "Plans and limits" },
];

export default function Documentation() {
    return (
        <>
            <main class="mx-auto max-w-6xl px-4 md:px-24">
                <nav
                    aria-label="Main navigation"
                    class="flex items-center justify-between gap-6 py-4"
                >
                    <a href="/" aria-label="Modulo home">
                        <img
                            src={Logo}
                            class="size-8 rounded-sm"
                            width="32"
                            height="32"
                            alt="Modulo"
                        />
                    </a>

                    <div class="flex items-center gap-6">
                        <div class="hidden space-x-4 sm:block">
                            <a class="font-medium text-zinc-600 hover:text-zinc-950" href="/about">
                                About
                            </a>
                            <a class="font-medium text-zinc-600 hover:text-zinc-950" href="/features">
                                Features
                            </a>
                            <a class="font-medium text-zinc-600 hover:text-zinc-950" href="/pricing">
                                Pricing
                            </a>
                        </div>

                        <Button as="a" href="/register" rel="prefetch">
                            Get started
                        </Button>
                    </div>
                </nav>

                <section class="py-14 md:py-20">
                    <p class="text-sm font-medium text-zinc-500">Documentation</p>
                    <h1 class="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                        Build with Modulo
                    </h1>
                    <p class="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                        Find an overview of the API, SDK, and usage details for connecting
                        Modulo to your workflow.
                    </p>
                </section>

                <div class="grid gap-8 border-t border-zinc-200 py-12 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
                    <aside class="md:sticky md:top-8 md:self-start md:border-r md:border-zinc-200 md:pr-6">
                        <p class="mb-3 px-3 text-sm font-semibold text-zinc-950">
                            On this page
                        </p>

                        <nav
                            aria-label="Documentation navigation"
                            class="flex flex-col gap-1"
                        >
                            {sections.map((section, index) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    class={`block rounded-sm px-3 py-2 text-sm ${index === 0
                                        ? "bg-zinc-100 font-medium text-zinc-950"
                                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                                        }`}
                                >
                                    {section.label}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    <article class="min-w-0">
                        <section
                            id="overview"
                            aria-labelledby="overview-heading"
                            class="scroll-mt-8 pb-12"
                        >
                            <h2
                                id="overview-heading"
                                class="text-2xl font-semibold tracking-tight text-zinc-950"
                            >
                                Overview
                            </h2>

                            <p class="mt-4 leading-7 text-zinc-600">
                                Modulo helps teams create, organize, and publish content
                                from one workspace. The API and SDK are intended to help
                                connect that content to your existing tools and workflows.
                            </p>
                        </section>

                        <section
                            id="quickstart"
                            aria-labelledby="quickstart-heading"
                            class="scroll-mt-8 border-t border-zinc-200 py-12"
                        >
                            <p class="text-sm font-medium text-zinc-500">Start here</p>

                            <h2
                                id="quickstart-heading"
                                class="mt-2 text-2xl font-semibold tracking-tight text-zinc-950"
                            >
                                Getting started
                            </h2>

                            <p class="mt-4 leading-7 text-zinc-600">
                                Choose the REST API for direct HTTP requests or use the SDK
                                from your application. Before running an integration,
                                replace the example endpoint, package name, and credentials
                                below with the values for your Modulo account.
                            </p>

                            <ol class="mt-5 list-inside list-decimal space-y-2 text-zinc-700">
                                <li>Choose the API or SDK approach that fits your stack.</li>
                                <li>Configure your account credentials securely.</li>
                                <li>Use the documented endpoints and methods for your content.</li>
                            </ol>
                        </section>

                        <section
                            id="api"
                            aria-labelledby="api-heading"
                            class="scroll-mt-8 border-t border-zinc-200 py-12"
                        >
                            <p class="text-sm font-medium text-zinc-500">HTTP integration</p>

                            <h2
                                id="api-heading"
                                class="mt-2 text-2xl font-semibold tracking-tight text-zinc-950"
                            >
                                REST API
                            </h2>

                            <p class="mt-4 leading-7 text-zinc-600">
                                Use standard HTTP requests to connect your application to
                                Modulo. The endpoint and authentication shown here are
                                placeholders, not production credentials or a confirmed route.
                            </p>

                            <pre
                                aria-label="Illustrative Python REST API example"
                                class="mt-5 overflow-x-auto rounded-md border border-zinc-200 bg-white p-5 text-sm leading-7 text-zinc-800"
                            >
                                <code>
                                    <span class="font-semibold text-violet-700">import</span>{" "}
                                    <span class="text-sky-700">requests</span>
                                    {"\n\n"}
                                    response = <span class="text-sky-700">requests</span>.
                                    <span class="font-semibold text-blue-700">get</span>(
                                    {"\n    "}
                                    <span class="text-emerald-700">"https://api.example.com/v1/projects"</span>,
                                    {"\n    "}
                                    headers={"{"}
                                    <span class="text-emerald-700">"Authorization"</span>:{" "}
                                    <span class="text-emerald-700">"Bearer YOUR_API_KEY"</span>
                                    {"}"}
                                    ,{"\n"})
                                    {"\n"}
                                    response.<span class="font-semibold text-blue-700">raise_for_status</span>()
                                    {"\n"}
                                    projects = response.<span class="font-semibold text-blue-700">json</span>()
                                </code>
                            </pre>
                        </section>

                        <section
                            id="sdk"
                            aria-labelledby="sdk-heading"
                            class="scroll-mt-8 border-t border-zinc-200 py-12"
                        >
                            <p class="text-sm font-medium text-zinc-500">Client library</p>

                            <h2
                                id="sdk-heading"
                                class="mt-2 text-2xl font-semibold tracking-tight text-zinc-950"
                            >
                                Python SDK
                            </h2>

                            <p class="mt-4 leading-7 text-zinc-600">
                                The SDK is designed to make it easier to work with the API
                                from Python applications. The package and method names in
                                this illustrative snippet need to be replaced with the
                                official SDK details.
                            </p>

                            <pre
                                aria-label="Illustrative Python SDK example"
                                class="mt-5 overflow-x-auto rounded-md border border-zinc-200 bg-white p-5 text-sm leading-7 text-zinc-800"
                            >
                                <code>
                                    <span class="font-semibold text-violet-700">from</span>{" "}
                                    <span class="text-sky-700">your_sdk</span>{" "}
                                    <span class="font-semibold text-violet-700">import</span>{" "}
                                    <span class="text-sky-700">Client</span>
                                    {"\n\n"}
                                    client = <span class="text-sky-700">Client</span>(
                                    api_key=<span class="text-emerald-700">"YOUR_API_KEY"</span>)
                                    {"\n"}
                                    projects = client.projects.
                                    <span class="font-semibold text-blue-700">list</span>()
                                </code>
                            </pre>
                        </section>

                        <section
                            id="limits"
                            aria-labelledby="limits-heading"
                            class="scroll-mt-8 border-t border-zinc-200 py-12"
                        >
                            <p class="text-sm font-medium text-zinc-500">Plans</p>

                            <h2
                                id="limits-heading"
                                class="mt-2 text-2xl font-semibold tracking-tight text-zinc-950"
                            >
                                Plans and limits
                            </h2>

                            <p class="mt-4 leading-7 text-zinc-600">
                                Requests, storage, plugin allowances, replication, analytics,
                                and overage rates depend on the plan. See the pricing page
                                for the latest plan details.
                            </p>

                            <a
                                href="/pricing"
                                class="mt-4 inline-flex font-medium text-zinc-950 underline underline-offset-4"
                            >
                                Compare plans and limits
                            </a>
                        </section>
                    </article>
                </div>
            </main>

            <footer class="border-t border-zinc-200 px-4 py-8 md:px-24">
                <p class="text-sm text-zinc-500">
                    © Modulo. Simple tools for thoughtful content work.
                </p>
            </footer>
        </>
    );
}
