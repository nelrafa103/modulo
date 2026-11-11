
import Logo from "../assets/614d1097-0a5e-4738-8119-975b124dd369.webp"
import Button from "../components/button";

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "Everything you need to get started.",
        action: "Get started",
    },
    {
        name: "Pro",
        price: "$19",
        description: "More room to build and collaborate.",
        action: "Choose Pro",
    },
    {
        name: "Team",
        price: "$49",
        description: "Tools and support for growing teams.",
        action: "Choose Team",
    },
];

const pricingGroups = [
    {
        title: "Plan basics",
        rows: [
            {
                label: "Projects",
                starter: "1",
                pro: "Unlimited",
                team: "Unlimited",
            },
            {
                label: "Features",
                starter: "Core features",
                pro: "Advanced features",
                team: "Everything in Pro",
            },
            {
                label: "Support",
                starter: "Community",
                pro: "Priority",
                team: "Dedicated",
            },
        ],
    },
    {
        title: "Usage and overages",
        rows: [
            {
                label: "API requests included per month",
                starter: "Por definir",
                pro: "Por definir",
                team: "Por definir",
            },
            {
                label: "Additional requests (per 1,000)",
                starter: "Por definir",
                pro: "Por definir",
                team: "Por definir",
            },
        ],
    },
    {
        title: "Storage",
        rows: [
            {
                label: "Database storage included",
                starter: "Por definir",
                pro: "Por definir",
                team: "Por definir",
            },
            {
                label: "Additional database storage (per GB/month)",
                starter: "Por definir",
                pro: "Por definir",
                team: "Por definir",
            },
            {
                label: "File storage included",
                starter: "Por definir",
                pro: "Por definir",
                team: "Por definir",
            },
            {
                label: "Additional file storage (per GB/month)",
                starter: "Por definir",
                pro: "Por definir",
                team: "Por definir",
            },
        ],
    },
    {
        title: "More capabilities",
        rows: [
            {
                label: "Plugins included",
                starter: "Por definir",
                pro: "Por definir",
                team: "Por definir",
            },
            {
                label: "Additional plugin (per month)",
                starter: "Por definir",
                pro: "Por definir",
                team: "Por definir",
            },
            {
                label: "Information replication",
                starter: "Por definir",
                pro: "Por definir",
                team: "Por definir",
            },
            {
                label: "Analytics",
                starter: "Por definir",
                pro: "Por definir",
                team: "Por definir",
            },
        ],
    },
];

export default function Pricing() {
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
                                class="font-medium text-zinc-600 hover:text-zinc-950"
                                href="/features"
                            >
                                Features
                            </a>
                            <a
                                class="font-medium text-zinc-950"
                                href="/pricing"
                                aria-current="page"
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
                            Pricing
                        </p>

                        <h1 class="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                            Clear plans for every stage.
                        </h1>

                        <p class="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                            Compare what’s included, how usage is measured,
                            and what happens when your projects grow.
                        </p>
                    </div>
                </section>

                <section
                    aria-labelledby="comparison-heading"
                    class="border-t border-zinc-200 py-16"
                >
                    <div class="max-w-2xl">
                        <p class="text-sm font-medium text-zinc-500">
                            Plan comparison
                        </p>

                        <h2
                            id="comparison-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            Compare limits and included features
                        </h2>

                        <p class="mt-4 leading-7 text-zinc-600">
                            Usage caps and overage rates are being finalized.
                            We’ll update these details as soon as they’re confirmed.
                        </p>
                    </div>

                    <div class="mt-8 overflow-x-auto">
                        <table class="w-full min-w-[900px] border-separate border-spacing-4 text-left text-base">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        class="w-[28%] py-6 align-bottom font-medium text-zinc-500"
                                    >
                                        Plan details
                                    </th>

                                    {plans.map((plan) => (
                                        <th
                                            key={plan.name}
                                            scope="col"
                                            class="min-w-52 px-5 py-6 align-top"
                                        >
                                            <p class="text-lg font-semibold text-zinc-950">
                                                {plan.name}
                                            </p>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {pricingGroups.map((group) => (
                                    <>
                                        <tr key={group.title}>
                                            <th
                                                colspan={4}
                                                class="h-16"
                                                scope="colgroup"
                                            >
                                                <span class="sr-only">
                                                    {group.title}
                                                </span>
                                            </th>
                                        </tr>

                                        {group.rows.map((row) => (
                                            <tr key={row.label}>
                                                <th
                                                    scope="row"
                                                    class="py-4 font-medium text-zinc-800"
                                                >
                                                    {row.label}
                                                </th>

                                                <td class="px-5 py-4 text-zinc-700">
                                                    {row.starter}
                                                </td>

                                                <td class="px-5 py-4 text-zinc-700">
                                                    {row.pro}
                                                </td>

                                                <td class="px-5 py-4 text-zinc-700">
                                                    {row.team}
                                                </td>
                                            </tr>
                                        ))}
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section
                    aria-labelledby="pdf-heading"
                    class="grid gap-10 border-t border-zinc-200 py-16 md:grid-cols-2 md:gap-16"
                >
                    <div>
                        <p class="text-sm font-medium text-zinc-500">
                            Pricing guide
                        </p>

                        <h2
                            id="pdf-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            Get the full pricing PDF
                        </h2>

                        <p class="mt-4 max-w-md leading-7 text-zinc-600">
                            Have the plan details sent to your inbox, including
                            included usage, storage, and any additional costs.
                        </p>
                    </div>

                    <form
                        aria-label="Request the pricing PDF"
                        class="space-y-5"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <div>
                            <label
                                for="pricing-email"
                                class="mb-1.5 block text-sm font-medium text-zinc-800"
                            >
                                Email address
                            </label>

                            <input
                                id="pricing-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                required
                                class="w-full rounded-sm border border-gray-300 px-2 py-1.5"
                            />
                        </div>

                        <Button class="w-full" type="button">
                            Email me the pricing PDF
                        </Button>

                        <p class="text-xs leading-5 text-zinc-500">
                            This is a visual-only form. It does not generate
                            a PDF or send an email yet.
                        </p>
                    </form>
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
