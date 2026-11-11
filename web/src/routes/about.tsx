
import Logo from "../assets/614d1097-0a5e-4738-8119-975b124dd369.webp"
import Button from "../components/button";

export default function About() {
    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <title>About | Modulo</title>
            <meta
                name="description"
                content="Learn about Modulo's story, commitments, and the people behind our content platform."
            />

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
                                class="font-medium text-zinc-950"
                                href="/about"
                                aria-current="page"
                            >
                                About
                            </a>

                            <a
                                class="font-medium text-zinc-600 hover:text-zinc-950"
                                href="/#features"
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

                        <Button as="a" href="/register" rel="prefetch">
                            Get started
                        </Button>
                    </div>
                </nav>

                <section class="py-16 md:py-24">
                    <div class="max-w-3xl">
                        <p class="text-sm font-medium text-zinc-500">
                            About Modulo
                        </p>

                        <h1 class="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                            Make space for the work that matters.
                        </h1>

                        <p class="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                            Modulo brings the essential parts of a content workflow
                            together, so teams can spend less time managing tools and
                            more time creating and sharing their work.
                        </p>
                    </div>
                </section>

                <section
                    aria-labelledby="story-heading"
                    class="grid gap-8 border-t border-zinc-200 py-16 md:grid-cols-[1fr_2fr] md:gap-12"
                >
                    <div>
                        <p class="text-sm font-medium text-zinc-500">
                            Our story
                        </p>

                        <h2
                            id="story-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            A simpler way to work with content
                        </h2>
                    </div>

                    <div class="space-y-5 leading-7 text-zinc-600">
                        <p>
                            Modulo started with a simple idea: managing content
                            should feel clear and straightforward. Teams need a
                            practical way to create, organize, and publish—not
                            another complicated process to work around.
                        </p>

                        <p>
                            That idea shapes the product today. We bring the core
                            workflow into one place and give teams flexible ways
                            to connect it to the tools they already use, including
                            an API and SDK.
                        </p>

                        <p>
                            We keep building toward the same goal: making content
                            work simpler, more organized, and easier to move forward.
                        </p>
                    </div>
                </section>

                <section
                    aria-labelledby="commitments-heading"
                    class="border-t border-zinc-200 py-16"
                >
                    <div class="max-w-2xl">
                        <p class="text-sm font-medium text-zinc-500">
                            What guides us
                        </p>

                        <h2
                            id="commitments-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            Our commitments
                        </h2>

                        <p class="mt-4 leading-7 text-zinc-600">
                            The choices we make about the product start with
                            the needs of the people using it.
                        </p>
                    </div>

                    <div class="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        <article class="border-t border-zinc-200 py-5">
                            <h3 class="font-semibold text-zinc-950">
                                Keep it clear
                            </h3>

                            <p class="mt-2 text-sm leading-6 text-zinc-600">
                                Make everyday content work easier to understand
                                and manage.
                            </p>
                        </article>

                        <article class="border-t border-zinc-200 py-5">
                            <h3 class="font-semibold text-zinc-950">
                                Build thoughtfully
                            </h3>

                            <p class="mt-2 text-sm leading-6 text-zinc-600">
                                Consider quality, usability, and security as
                                part of the product—not as afterthoughts.
                            </p>
                        </article>

                        <article class="border-t border-zinc-200 py-5">
                            <h3 class="font-semibold text-zinc-950">
                                Stay connected
                            </h3>

                            <p class="mt-2 text-sm leading-6 text-zinc-600">
                                Support flexible workflows with tools like
                                our API and SDK.
                            </p>
                        </article>
                    </div>
                </section>

                <section
                    id="contact"
                    aria-labelledby="contact-heading"
                    class="grid gap-10 border-t border-zinc-200 py-16 md:grid-cols-2 md:gap-16"
                >
                    <div>
                        <p class="text-sm font-medium text-zinc-500">
                            Get in touch
                        </p>

                        <h2
                            id="contact-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            Let’s talk
                        </h2>

                        <p class="mt-4 max-w-md leading-7 text-zinc-600">
                            Have a question, an idea, or want to learn more
                            about Modulo? Send us a note.
                        </p>
                    </div>

                    <form
                        aria-label="Contact form"
                        class="flex flex-col gap-6"
                        onSubmit={handleSubmit}
                    >
                        <div class="space-y-2">
                            <label
                                for="contact-name"
                                class="mb-1.5 block text-sm font-medium text-zinc-800"
                            >
                                Name
                            </label>

                            <input
                                id="contact-name"
                                class="w-full rounded-sm border border-gray-300 px-2 py-1.5"
                                placeholder="Enter your name"
                                type="text"
                                name="name"
                                required
                            />
                        </div>

                        <div class="space-y-2">
                            <label
                                for="contact-email"
                                class="mb-1.5 block text-sm font-medium text-zinc-800"
                            >
                                Email
                            </label>

                            <input
                                id="contact-email"
                                class="w-full rounded-sm border border-gray-300 px-2 py-1.5"
                                placeholder="Enter your email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>

                        <div class="space-y-2">
                            <label
                                for="contact-message"
                                class="mb-1.5 block text-sm font-medium text-zinc-800"
                            >
                                Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows={5}
                                class="w-full rounded-sm border border-gray-300 px-2 py-1.5"
                                required
                            />
                        </div>

                        <Button class="w-full" type="submit">
                            Send message
                        </Button>

                        <p class="text-xs leading-5 text-zinc-500">
                            This is a visual-only form and does not send
                            messages yet.
                        </p>
                    </form>
                </section>
            </main>

            <footer class="border-t border-zinc-200 px-4 py-8 md:px-12 lg:px-24">
                <p class="text-sm text-zinc-500">
                    © Modulo. Simple tools for thoughtful content work.
                </p>
            </footer>
        </>
    );
}
