

import Logo from "../assets/614d1097-0a5e-4738-8119-975b124dd369.webp";
import Button from "../components/button";

const features = [
    {
        id: "content-editor",
        title: "Flexible content editing",
        description: "Write and format content in a clear, easy-to-use editor.",
        detail:
            "Keep the writing process straightforward as ideas move from an early draft toward polished content.",
    },
    {
        id: "media-library",
        title: "Media in one place",
        description: "Keep the images and assets for your projects organized.",
        detail:
            "Keeping supporting files together makes it easier to find and reuse the materials connected to your work.",
    },
    {
        id: "content-search",
        title: "Find content faster",
        description: "Quickly locate the content and assets you need.",
        detail:
            "As your projects grow, being able to find existing content helps reduce time spent searching and repeating work.",
    },
    {
        id: "secure-workspace",
        title: "Secure by design",
        description: "Help keep your content and workspace protected.",
        detail:
            "Protection is a guiding consideration in how we think about the workspace and the content managed within it.",
    },
    {
        id: "content-performance",
        title: "Track performance",
        description: "Get a clearer view of how your content is doing.",
        detail:
            "Performance context can help your team understand what is working and decide what deserves attention next.",
    },
    {
        id: "publishing-workflow",
        title: "Publish with confidence",
        description: "Keep your publishing workflow clear from draft to done.",
        detail:
            "A clear path from draft to publication helps teams keep content moving and understand what still needs attention.",
    },
];

export default function Features() {

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
                            <a
                                class="font-medium text-zinc-600 hover:text-zinc-950"
                                href="/about"
                            >
                                About
                            </a>

                            <a
                                class="font-medium text-zinc-950"
                                href="/features"
                                aria-current="page"
                            >
                                Features
                            </a>

                            <a
                                class="font-medium text-zinc-600 hover:text-zinc-950"
                                href="/#pricing"
                            >
                                Pricing
                            </a>
                        </div>

                        <Button as="a" href={"/register"}>
                            Get started
                        </Button>
                    </div>
                </nav>

                <section class="py-16 md:py-24">
                    <div class="max-w-3xl">
                        <p class="text-sm font-medium text-zinc-500">
                            Features
                        </p>

                        <h1 class="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                            Everything your content workflow needs.
                        </h1>

                        <p class="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                            Create, organize, and publish content with tools
                            that keep your workflow simple. From the first
                            draft to the final steps of publishing, each
                            capability is designed to help your team stay
                            focused on the work.
                        </p>

                        <div class="mt-8 flex flex-wrap gap-3">
                            <Button>
                                Get started
                            </Button>

                            <Button data-variant="outline">
                                Explore plans
                            </Button>
                        </div>
                    </div>
                </section>

                <section
                    aria-labelledby="features-heading"
                    class="grid gap-8 border-t border-zinc-200 py-16 md:grid-cols-[1fr_2fr] md:gap-12"
                >
                    <div>
                        <p class="text-sm font-medium text-zinc-500">
                            Made for your workflow
                        </p>

                        <h2
                            id="features-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            Everything in one clear workspace
                        </h2>

                        <p class="mt-4 leading-7 text-zinc-600">
                            Bring the everyday parts of content work together,
                            from the first draft to publishing and beyond.
                        </p>

                        <p class="mt-4 leading-7 text-zinc-600">
                            Use the features together as one process: create
                            and format content, keep its supporting assets
                            organized, find what you need, and move work
                            toward publication. Performance insights help
                            you reflect on how published content is doing.
                        </p>
                    </div>

                    <div class="grid gap-x-8 sm:grid-cols-2">
                        {features.map((feature) => (
                            <article
                                key={feature.id}
                                id={feature.id}
                                class="border-t border-zinc-200 py-6"
                            >
                                <h3 class="font-semibold text-zinc-950">
                                    {feature.title}
                                </h3>

                                <p class="mt-2 text-sm leading-6 text-zinc-600">
                                    {feature.description}
                                </p>

                                <p class="mt-3 text-sm leading-6 text-zinc-600">
                                    {feature.detail}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    id="api-sdk"
                    aria-labelledby="api-heading"
                    class="grid gap-8 border-t border-zinc-200 py-16 md:grid-cols-[1fr_2fr] md:gap-12"
                >
                    <div>
                        <p class="text-sm font-medium text-zinc-500">
                            For developers
                        </p>

                        <h2
                            id="api-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            Connect the tools you already use
                        </h2>

                        <p class="mt-4 leading-7 text-zinc-600">
                            Use the API to connect your content to other
                            tools. The SDK provides a simpler way to
                            integrate from your application. This helps
                            teams connect their content workflow to the
                            systems they already use.
                        </p>

                        <a
                            href="/#api-sdk"
                            class="mt-5 inline-flex font-medium text-zinc-950 underline underline-offset-4"
                        >
                            View API and SDK examples
                        </a>
                    </div>

                    <div class="grid gap-x-8 sm:grid-cols-2">
                        <article class="border-t border-zinc-200 py-6">
                            <h3 class="font-semibold text-zinc-950">
                                API
                            </h3>

                            <p class="mt-2 text-sm leading-6 text-zinc-600">
                                Work with project content programmatically
                                and build integrations around your workflow.
                            </p>

                            <p class="mt-3 text-sm leading-6 text-zinc-600">
                                The API is a direct option for custom
                                connections and workflows. See the
                                documentation for example requests.
                            </p>
                        </article>

                        <article class="border-t border-zinc-200 py-6">
                            <h3 class="font-semibold text-zinc-950">
                                SDK
                            </h3>

                            <p class="mt-2 text-sm leading-6 text-zinc-600">
                                Use a developer-friendly client to work
                                with the API from your application.
                            </p>

                            <p class="mt-3 text-sm leading-6 text-zinc-600">
                                The SDK provides an application-oriented
                                way to make those connections without
                                handling every request manually.
                            </p>
                        </article>
                    </div>
                </section>

                <section
                    aria-labelledby="features-faq-heading"
                    class="border-t border-zinc-200 py-16"
                >
                    <div class="max-w-2xl">
                        <p class="text-sm font-medium text-zinc-500">
                            More information
                        </p>

                        <h2
                            id="features-faq-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            Questions about features
                        </h2>
                    </div>

                    <div class="mt-8 max-w-3xl divide-y divide-zinc-200 border-y border-zinc-200">
                        <details>
                            <summary class="cursor-pointer py-5 font-medium text-zinc-950">
                                What can I manage with Modulo?
                            </summary>

                            <p class="pb-5 leading-7 text-zinc-600">
                                Modulo helps teams create, organize, and
                                publish content, along with the media and
                                assets connected to their projects.
                            </p>
                        </details>

                        <details>
                            <summary class="cursor-pointer py-5 font-medium text-zinc-950">
                                Can I connect Modulo to other tools?
                            </summary>

                            <p class="pb-5 leading-7 text-zinc-600">
                                Yes. The API and SDK are designed to help
                                connect your content workflow with other
                                tools and applications. See the{" "}
                                <a
                                    href="/docs"
                                    class="font-medium text-zinc-950 underline underline-offset-4"
                                >
                                    documentation
                                </a>{" "}
                                for illustrative examples.
                            </p>
                        </details>

                        <details>
                            <summary class="cursor-pointer py-5 font-medium text-zinc-950">
                                Where can I compare plan limits?
                            </summary>

                            <p class="pb-5 leading-7 text-zinc-600">
                                Visit the{" "}
                                <a
                                    href="/pricing"
                                    class="font-medium text-zinc-950 underline underline-offset-4"
                                >
                                    pricing page
                                </a>{" "}
                                to compare plans, included features, and
                                usage details.
                            </p>
                        </details>
                    </div>
                </section>

                <section class="py-16">
                    <div class="flex flex-col justify-between gap-6 border-t border-zinc-200 py-10 sm:flex-row sm:items-center">
                        <div>
                            <h2 class="text-2xl font-semibold tracking-tight text-zinc-950">
                                Ready to make content work simpler?
                            </h2>

                            <p class="mt-2 text-zinc-600">
                                Bring your projects together in one clear
                                workspace.
                            </p>
                        </div>

                        <Button as="a" href={"/register"}>
                            Get started
                        </Button>
                    </div>
                </section>
            </main>

            <footer class="border-t border-zinc-200 px-4 py-8 md:px-24">
                <p class="text-sm text-zinc-500">
                    © Modulo. Simple tools for thoughtful content work.
                </p>
            </footer>
        </>
    );
}
