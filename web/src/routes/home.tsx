
import { useEffect, useState } from "preact/hooks";

import Button from "../components/button";
import Logo from "../assets/614d1097-0a5e-4738-8119-975b124dd369.webp";
import HeroImage from "../assets/8cba26b5-0bc6-4395-bef8-64d603d91ef4.webp";
import * as lang from "../locales/en-US";

import "../app.css";

const languages = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Go",
    "Ruby",
    "PHP",
    "Java",
    "C#",
    "Rust",
    "Kotlin",
    "Swift",
    "Elixir",
];

const featurePositions = [
    ["0%", "50%"],
    ["100%", "0%"],
    ["66.67%", "50%"],
    ["100%", "50%"],
    ["0%", "100%"],
    ["100%", "100%"],
];

const spriteStyle = (x: string, y: string) =>
({
    "--sprite-x": x,
    "--sprite-y": y,
});

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.title = lang.default.home.title;
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <main class="md:px-24 px-4 md:max-w-6xl mx-auto">
                {/* Navigation */}
                <nav class="relative flex flex-wrap items-center justify-between gap-2 py-4 md:px-2">
                    <div>
                        <img
                            src={Logo}
                            class="size-8 rounded-sm"
                            width="32"
                            height="32"
                            alt={lang.default.home.logoAlt}
                        />
                    </div>

                    <button
                        type="button"
                        class="flex size-10 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 hover:bg-zinc-50 md:hidden"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="lang.default.home-navigation"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            class="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            aria-hidden="true"
                        >
                            {menuOpen ? (
                                <path d="m6 6 12 12M18 6 6 18" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>

                    <div
                        id="lang.default.home-navigation"
                        class={`absolute left-0 right-0 top-full z-10 flex-col gap-3 rounded-md border border-zinc-200 bg-white p-4 shadow-sm ${menuOpen ? "flex" : "hidden"
                            } md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
                    >
                        <div class="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                            <a
                                class="rounded-sm py-2 font-medium text-black hover:text-zinc-600 md:py-0"
                                href="/about"
                                onClick={closeMenu}
                            >
                                {lang.default.home.navigation.about}
                            </a>

                            <a
                                class="rounded-sm py-2 font-medium text-black hover:text-zinc-600 md:py-0"
                                href="#features"
                                onClick={closeMenu}
                            >
                                {lang.default.home.navigation.features}
                            </a>

                            <a
                                class="rounded-sm py-2 font-medium text-black hover:text-zinc-600 md:py-0"
                                href="#pricing"
                                onClick={closeMenu}
                            >
                                {lang.default.home.navigation.pricing}
                            </a>

                            <a
                                class="rounded-sm py-2 font-medium text-black hover:text-zinc-600 md:py-0"
                                href="#faqs"
                                onClick={closeMenu}
                            >
                                {lang.default.home.navigation.faqs}
                            </a>
                        </div>

                        <Button
                            class="w-full md:w-auto"
                            onClick={closeMenu}
                            href={"/register"}
                            as="a"
                        >
                            {lang.default.home.navigation.getStarted}
                        </Button>
                    </div>
                </nav>

                {/* Hero */}
                <section class="mt-12">
                    <div class="max-w-3xl">
                        <p class="text-sm font-medium text-zinc-500">
                            {lang.default.home.hero.eyebrow}
                        </p>

                        <h1 class="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                            {lang.default.home.hero.title}
                        </h1>

                        <p class="mt-1 mb-4 max-w-2xl text-lg leading-7 text-zinc-600">
                            {lang.default.home.hero.description}
                        </p>

                        <Button
                            data-variant="outline"
                            as="a"
                            href="/login"
                        >
                            {lang.default.home.hero.signIn}
                        </Button>
                    </div>

                    <img
                        src={HeroImage}
                        class="mt-10 w-full rounded-md"
                        alt={lang.default.home.hero.imageAlt}
                    />
                </section>

                {/* Statistics */}
                <section
                    aria-label={lang.default.home.statsLabel}
                    class="mt-12 grid grid-cols-2 gap-6 border-y border-zinc-200 py-10 md:grid-cols-4 md:gap-8"
                >
                    {lang.default.home.stats.map((stat) => (
                        <article
                            key={stat.label}
                            class="border-l border-zinc-200 pl-4 first:border-0 first:pl-0"
                        >
                            <p class="text-3xl font-semibold tracking-tight text-zinc-950">
                                {stat.value}
                            </p>

                            <h2 class="mt-2 text-sm leading-5 text-zinc-600">
                                {stat.label}
                            </h2>
                        </article>
                    ))}
                </section>

                {/* Features */}
                <section
                    id="features"
                    class="mt-12 scroll-mt-8 border-zinc-200 py-16"
                >
                    <div class="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
                        <div>
                            <p class="text-gray-400 text-sm font-medium">
                                {lang.default.home.features.eyebrow}
                            </p>

                            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                                {lang.default.home.features.title}
                            </h2>

                            <p class="mt-4 leading-7 text-zinc-600">
                                {lang.default.home.features.description}
                            </p>
                        </div>

                        <ul class="grid gap-x-8 md:grid-cols-2">
                            {lang.default.home.features.items.map((item, index) => (
                                <li
                                    key={item.title}
                                    class="flex gap-4 border-t border-zinc-200 py-6"
                                >
                                    <div
                                        class="feature-sprite aspect-square shrink-0"
                                        style={spriteStyle(
                                            featurePositions[index][0],
                                            featurePositions[index][1],
                                        )}
                                        aria-hidden="true"
                                    />

                                    <div>
                                        <h2 class="font-semibold text-zinc-950">
                                            {item.title}
                                        </h2>

                                        <p class="mt-2 text-sm leading-6 text-zinc-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div />

                        <div class="mt-3 flex justify-end">
                            <a
                                href="/features#content-editor"
                                class="text-sm font-medium text-zinc-950 underline underline-offset-4"
                            >
                                {lang.default.home.features.more}
                            </a>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section
                    id="pricing"
                    class="mt-20 scroll-mt-8 pb-16"
                >
                    <div class="max-w-2xl">
                        <p class="text-gray-400 text-sm font-medium">
                            {lang.default.home.pricing.eyebrow}
                        </p>

                        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                            {lang.default.home.pricing.title}
                        </h2>

                        <p class="mt-3 text-zinc-600">
                            {lang.default.home.pricing.description}
                        </p>
                    </div>

                    <div class="mt-10 grid grid-cols-1 divide-y divide-zinc-200 md:grid-cols-3 md:divide-x md:divide-y-0">
                        {lang.default.home.pricing.plans.map((plan, index) => (
                            <article
                                key={plan.name}
                                class={`py-8 md:py-0 ${index === 0
                                    ? "md:pr-8"
                                    : index === 1
                                        ? "md:px-8"
                                        : "md:pl-8"
                                    }`}
                            >
                                <h3 class="font-semibold text-zinc-950">
                                    {plan.name}
                                </h3>

                                <p class="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">
                                    {plan.price}

                                    <span class="text-base font-normal text-zinc-500">
                                        {lang.default.home.pricing.period}
                                    </span>
                                </p>

                                <p class="mt-3 min-h-12 text-sm text-zinc-600">
                                    {plan.description}
                                </p>

                                <ul class="mt-6 space-y-3 text-sm text-zinc-700">
                                    {plan.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>

                                <a
                                    href="/"
                                    class="mt-8 inline-flex font-medium text-zinc-950 underline underline-offset-4"
                                >
                                    {plan.action}
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section
                    id="faqs"
                    class="mt-20 scroll-mt-8 pb-16"
                >
                    <div class="max-w-2xl">
                        <p class="text-gray-400 text-sm font-medium">
                            {lang.default.home.faqs.eyebrow}
                        </p>

                        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                            {lang.default.home.faqs.title}
                        </h2>
                    </div>

                    <div class="mt-8 max-w-3xl divide-y divide-zinc-200 border-y border-zinc-200">
                        {lang.default.home.faqs.items.map((faq) => (
                            <details key={faq.question}>
                                <summary class="cursor-pointer py-5 font-medium text-zinc-950">
                                    {faq.question}
                                </summary>

                                <p class="pb-5 text-sm leading-6 text-zinc-600">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Workflow */}
                <section class="mt-20 grid items-center gap-10 border-t border-zinc-200 py-16 md:grid-cols-2">
                    <div class="flex items-center justify-center w-full h-full">
                        <div
                            class="feature-sprite aspect-square shrink-0 max-w-56 h-56"
                            style={spriteStyle("0%", "0%")}
                            aria-hidden="true"
                        />
                    </div>

                    <div>
                        <p class="text-gray-400 text-sm font-medium">
                            {lang.default.home.workflow.eyebrow}
                        </p>

                        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                            {lang.default.home.workflow.title}
                        </h2>

                        <p class="mt-4 leading-7 text-zinc-600">
                            {lang.default.home.workflow.description}
                        </p>

                        <ul class="mt-6 space-y-3 text-sm text-zinc-700">
                            {lang.default.home.workflow.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Testimonials */}
                <section
                    id="testimonials"
                    class="border-t border-zinc-200 py-16"
                >
                    <div class="max-w-2xl">
                        <p class="text-gray-400 text-sm font-medium">
                            {lang.default.home.testimonials.eyebrow}
                        </p>

                        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                            {lang.default.home.testimonials.title}
                        </h2>

                        <p class="mt-3 text-sm text-zinc-600">
                            {lang.default.home.testimonials.description}
                        </p>
                    </div>

                    <div class="mt-10 grid grid-cols-1 divide-y divide-zinc-200 md:grid-cols-3 md:divide-x md:divide-y-0">
                        {lang.default.home.testimonials.quotes.map((quote, index) => (
                            <figure
                                key={index}
                                class={`py-6 md:py-0 ${index === 0
                                    ? "md:pr-8"
                                    : index === 1
                                        ? "md:px-8"
                                        : "md:pl-8"
                                    }`}
                            >
                                <blockquote class="text-lg leading-7 text-zinc-800">
                                    {quote}
                                </blockquote>

                                <figcaption class="mt-5 text-sm">
                                    <span class="block font-medium text-zinc-950">
                                        {lang.default.home.testimonials.customerName}
                                    </span>

                                    <span class="mt-1 block text-zinc-500">
                                        {lang.default.home.testimonials.roleCompany}
                                    </span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>

                {/* API and SDK */}
                <section
                    id="api-sdk"
                    class="border-t border-zinc-200 py-16"
                >
                    <div class="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
                        <div>
                            <p class="text-gray-400 text-sm font-medium">
                                {lang.default.home.api.eyebrow}
                            </p>

                            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                                {lang.default.home.api.title}
                            </h2>

                            <p class="mt-4 leading-7 text-zinc-600">
                                {lang.default.home.api.description}
                            </p>

                            <ul
                                aria-label={lang.default.home.api.languagesLabel}
                                class="mt-6 flex flex-wrap gap-2"
                            >
                                {languages.map((language) => (
                                    <li key={language}>
                                        <span class="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700">
                                            {language}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div class="grid gap-6 md:grid-cols-2">
                            <article class="border-t border-zinc-200 py-6">
                                <p class="text-xs font-medium text-zinc-500">
                                    {lang.default.home.api.restEyebrow}
                                </p>

                                <h3 class="mt-2 text-lg font-semibold text-zinc-950">
                                    {lang.default.home.api.restTitle}
                                </h3>

                                <p class="mt-3 text-sm leading-6 text-zinc-600">
                                    {lang.default.home.api.restDescription}
                                </p>

                                <pre
                                    aria-label={lang.default.home.api.restExampleLabel}
                                    class="mt-5 overflow-x-auto rounded-md border border-zinc-200 bg-white p-4 text-xs leading-6 text-zinc-800"
                                >
                                    <code>
                                        <span class="font-semibold text-violet-700">
                                            import
                                        </span>{" "}
                                        <span class="text-sky-700">requests</span>
                                        {"\n\n"}
                                        response = <span class="text-sky-700">requests</span>.
                                        <span class="font-semibold text-blue-700">get</span>(
                                        {"\n"}
                                        {"    "}
                                        <span class="text-emerald-700">
                                            "https://api.example.com/v1/projects"
                                        </span>
                                        ,{"\n"}
                                        {"    "}headers={`{"Authorization": "Bearer YOUR_API_KEY"}`}
                                        ,{"\n"}
                                        ){"\n"}
                                        response.
                                        <span class="font-semibold text-blue-700">
                                            raise_for_status
                                        </span>
                                        (){"\n"}
                                        projects = response.
                                        <span class="font-semibold text-blue-700">
                                            json
                                        </span>
                                        ()
                                    </code>
                                </pre>
                            </article>

                            <article class="border-t border-zinc-200 py-6">
                                <p class="text-xs font-medium text-zinc-500">
                                    {lang.default.home.api.sdkEyebrow}
                                </p>

                                <h3 class="mt-2 text-lg font-semibold text-zinc-950">
                                    {lang.default.home.api.sdkTitle}
                                </h3>

                                <p class="mt-3 text-sm leading-6 text-zinc-600">
                                    {lang.default.home.api.sdkDescription}
                                </p>

                                <pre
                                    aria-label={lang.default.home.api.sdkExampleLabel}
                                    class="mt-5 overflow-x-auto rounded-md border border-zinc-200 bg-white p-4 text-xs leading-6 text-zinc-800"
                                >
                                    <code>
                                        <span class="font-semibold text-violet-700">
                                            from
                                        </span>{" "}
                                        <span class="text-sky-700">your_sdk</span>{" "}
                                        <span class="font-semibold text-violet-700">
                                            import
                                        </span>{" "}
                                        <span class="text-sky-700">Client</span>
                                        {"\n\n"}
                                        client = <span class="text-sky-700">Client</span>(
                                        api_key=
                                        <span class="text-emerald-700">
                                            "YOUR_API_KEY"
                                        </span>
                                        ){"\n"}
                                        projects = client.projects.
                                        <span class="font-semibold text-blue-700">
                                            list
                                        </span>
                                        ()
                                    </code>
                                </pre>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section
                    id="team"
                    aria-labelledby="team-heading"
                    class="border-t border-zinc-200 py-16"
                >
                    <div class="max-w-2xl">
                        <p class="text-gray-400 text-sm font-medium">
                            {lang.default.home.team.eyebrow}
                        </p>

                        <h2
                            id="team-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            {lang.default.home.team.title}
                        </h2>

                        <p class="mt-3 leading-7 text-zinc-600">
                            {lang.default.home.team.description}
                        </p>
                    </div>

                    <div class="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
                        {lang.default.home.team.members.map((member) => (
                            <article
                                key={member.role}
                                class="border-t border-zinc-200 py-5"
                            >
                                <h3 class="font-semibold text-zinc-950">
                                    {member.role}
                                </h3>

                                <p class="mt-2 text-sm leading-6 text-zinc-600">
                                    {member.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer class="border-t border-zinc-200 px-4 py-12 md:px-24">
                <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
                    <div>
                        <img
                            src={Logo}
                            class="size-8 rounded-sm"
                            width="32"
                            height="32"
                            alt={lang.default.home.logoAlt}
                        />

                        <p class="mt-4 max-w-xs text-sm leading-6 text-zinc-600">
                            {lang.default.home.footer.description}
                        </p>
                    </div>

                    <nav aria-label={lang.default.home.footer.navigationLabel}>
                        <h2 class="font-semibold text-zinc-950">
                            {lang.default.home.footer.explore}
                        </h2>

                        <ul class="mt-4 space-y-3 text-sm text-zinc-600">
                            <li>
                                <a class="hover:text-zinc-950" href="#features">
                                    {lang.default.home.navigation.features}
                                </a>
                            </li>

                            <li>
                                <a class="hover:text-zinc-950" href="#pricing">
                                    {lang.default.home.navigation.pricing}
                                </a>
                            </li>

                            <li>
                                <a class="hover:text-zinc-950" href="#faqs">
                                    {lang.default.home.navigation.faqs}
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div>
                        <h2 class="font-semibold text-zinc-950">
                            {lang.default.home.footer.getStarted}
                        </h2>

                        <p class="mt-4 text-sm leading-6 text-zinc-600">
                            {lang.default.home.footer.planDescription}
                        </p>

                        <a
                            class="mt-4 inline-flex font-medium text-zinc-950 underline underline-offset-4"
                            href="#pricing"
                        >
                            {lang.default.home.footer.viewPlans}
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
