
import { useMemo, useState } from "preact/hooks";
import { defineChart, dot, lineY } from "@tanstack/charts";
import { Chart } from "@tanstack/charts/preact";
import { scaleLinear } from "@tanstack/charts/scales/linear";
import { scalePoint } from "@tanstack/charts/scales/point";
import Logo from "../../assets/614d1097-0a5e-4738-8119-975b124dd369.webp";
import Button from "../../components/button";

const viewsData = [
    { date: "Oct 8", views: 160 },
    { date: "Oct 14", views: 205 },
    { date: "Oct 20", views: 255 },
    { date: "Oct 26", views: 320 },
    { date: "Nov 1", views: 390 },
    { date: "Nov 6", views: 475 }
];

const viewsChart = defineChart({
    marks: [
        lineY(viewsData, {
            x: "date",
            y: "views",
            stroke: "#2563eb",
            strokeWidth: 2.5
        }),
        dot(viewsData.slice(-1), {
            x: "date",
            y: "views",
            r: 4,
            fill: "#2563eb",
            stroke: "white",
            strokeWidth: 2
        })
    ],
    scales: {
        x: {
            scale: () => scalePoint<string>().padding(0),
            axis: false
        },
        y: {
            scale: scaleLinear,
            nice: true,
            grid: true,
            axis: false
        }
    },
    margin: 0
});

const navigation = [
    { label: "Overview", href: "/panel" },
    { label: "Pages", href: "/panel/pages" },
    { label: "Team", href: "/panel/users" },
    { label: "Analytics", href: "/panel/tables" },
    { label: "Settings", href: "/panel/settings" }
];

const posts = [
    {
        title: "The future of content operations",
        type: "Blog post",
        status: "Published",
        updated: "Today",
        author: "Alex Morgan",
        views: "2,481"
    },
    {
        title: "Product updates — October",
        type: "Announcement",
        status: "Published",
        updated: "Yesterday",
        author: "Jordan Lee",
        views: "1,904"
    },
    {
        title: "Getting started with your workspace",
        type: "Documentation",
        status: "In review",
        updated: "Nov 3, 2026",
        author: "Sam Kim",
        views: "—"
    },
    {
        title: "A simpler way to manage your media",
        type: "Blog post",
        status: "Draft",
        updated: "Oct 29, 2026",
        author: "Alex Morgan",
        views: "—"
    }
];

const upcoming = [
    {
        day: "28",
        month: "OCT",
        title: "November product update",
        detail: "Blog post · 9:00 AM"
    },
    {
        day: "12",
        month: "NOV",
        title: "Workspace guide",
        detail: "Documentation · 11:30 AM"
    },
    {
        day: "16",
        month: "NOV",
        title: "November newsletter",
        detail: "Email · 8:00 AM"
    }
];

export default function Panel() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = useMemo(
        () =>
            posts.filter((post) =>
                `${post.title} ${post.type} ${post.status}`
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            ),
        [searchQuery]
    );

    return (
        <>
            <title>Dashboard | Modulo</title>
            <meta
                name="description"
                content="A clear, AI-assisted summary of your content and workspace."
            />

            <main class="mx-auto max-w-6xl px-4 md:px-24">
                <nav
                    aria-label="Main navigation"
                    class="flex flex-wrap items-center justify-between gap-4 py-4"
                >
                    <a href="/panel" aria-label="Modulo dashboard">
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
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    class={`font-medium ${item.href === "/panel"
                                        ? "text-zinc-950"
                                        : "text-zinc-600 hover:text-zinc-950"
                                        }`}
                                    href={item.href}
                                    aria-current={
                                        item.href === "/panel"
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <Button as="a" href="/panel/pages" rel="prefetch">
                            Create content
                        </Button>
                    </div>
                </nav>

                <section class="py-16 md:py-24">
                    <div class="max-w-3xl">
                        <p class="text-sm font-medium text-zinc-500">
                            AI briefing · Friday, November 6, 2026
                        </p>

                        <h1 class="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                            Your workspace, in context.
                        </h1>

                        <p class="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                            A concise read on content performance, items that need
                            attention, and what your team is publishing next.
                        </p>
                    </div>
                </section>

                <section
                    aria-labelledby="summary-heading"
                    class="grid gap-8 border-t border-zinc-200 py-12 md:grid-cols-[1fr_2fr] md:gap-12"
                >
                    <div>
                        <p class="text-sm font-medium text-zinc-500">
                            The short version
                        </p>

                        <h2
                            id="summary-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            Executive summary
                        </h2>

                        <p class="mt-4 leading-7 text-zinc-600">
                            Your briefing on performance, recent work, and the
                            next important dates.
                        </p>
                    </div>

                    <div class="space-y-5 text-base leading-7 text-zinc-600">
                        <p>
                            Your published content received{" "}
                            <strong class="font-semibold text-zinc-950">
                                24,680 views
                            </strong>{" "}
                            in the last 30 days, up 12.8% from the previous month.
                            Readers are spending an average of 4 minutes and 32
                            seconds with your content.
                        </p>

                        <p>
                            The audience comes mostly from direct visits (48%) and
                            organic search (32%). Your strongest recent article is
                            “The future of content operations,” with 2,481 views.
                        </p>

                        <p>
                            Two items could use attention: “Getting started with
                            your workspace” is in review, and “A simpler way to
                            manage your media” is still a draft. The workspace
                            guide is scheduled for November 12.
                        </p>
                    </div>
                </section>

                <section
                    aria-labelledby="performance-heading"
                    class="grid gap-8 border-t border-zinc-200 py-12 md:grid-cols-[1fr_2fr] md:gap-12"
                >
                    <div>
                        <p class="text-sm font-medium text-zinc-500">
                            Performance
                        </p>

                        <h2
                            id="performance-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            Steady growth
                        </h2>

                        <p class="mt-4 leading-7 text-zinc-600">
                            Page views have trended upward over the past month,
                            with the strongest gains in the last two weeks.
                        </p>

                        <p class="mt-4 text-sm leading-6 text-zinc-500">
                            Direct and organic search together account for 80%
                            of your audience. Social brings in the remaining 20%.
                        </p>
                    </div>

                    <div>
                        <div class="flex items-baseline justify-between gap-4">
                            <p class="font-medium text-zinc-950">
                                Views over the last 30 days
                            </p>

                            <p class="text-sm text-zinc-500">
                                24,680{" "}
                                <span class="text-emerald-700">(+12.8%)</span>
                            </p>
                        </div>

                        <div class="mt-5">
                            <Chart
                                definition={viewsChart}
                                className="h-48 w-full"
                                height={192}
                                ariaLabel="Line chart showing page views increasing over the last 30 days"
                            />

                            <div
                                class="mt-2 flex justify-between text-[11px] text-zinc-400"
                                aria-hidden="true"
                            >
                                {["Oct 8", "Oct 14", "Oct 20", "Oct 26", "Nov 1", "Nov 6"].map(
                                    (date) => (
                                        <span key={date}>{date}</span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    aria-labelledby="attention-heading"
                    class="grid gap-8 border-t border-zinc-200 py-12 md:grid-cols-[1fr_2fr] md:gap-12"
                >
                    <div>
                        <p class="text-sm font-medium text-zinc-500">
                            Needs attention
                        </p>

                        <h2
                            id="attention-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            Keep things moving
                        </h2>

                        <p class="mt-4 leading-7 text-zinc-600">
                            A short list of work that may benefit from a review
                            or a follow-up.
                        </p>
                    </div>

                    <div class="space-y-6">
                        <p class="leading-7 text-zinc-600">
                            “Getting started with your workspace” is waiting for
                            review. Approving it ahead of its November 12
                            publication date will keep the schedule on track.
                            The media management article has not been updated
                            since October 29 and remains a draft.
                        </p>

                        <label class="flex h-10 max-w-sm items-center gap-2 rounded-sm border border-zinc-200 px-3 text-zinc-400 focus-within:border-zinc-400">
                            <svg
                                class="size-4 shrink-0"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.6"
                                aria-hidden="true"
                            >
                                <circle cx="8.75" cy="8.75" r="5.75" />
                                <path d="m13 13 4 4" />
                            </svg>

                            <input
                                value={searchQuery}
                                onInput={(event) =>
                                    setSearchQuery(event.currentTarget.value)
                                }
                                class="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-0"
                                type="search"
                                placeholder="Find a content item..."
                                aria-label="Search content"
                            />
                        </label>

                        <ul class="divide-y divide-zinc-200 border-t border-zinc-200">
                            {filteredPosts.map((post) => (
                                <li
                                    key={post.title}
                                    class="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4"
                                >
                                    <div>
                                        <a
                                            href="/panel/pages"
                                            class="font-medium text-zinc-950 hover:underline"
                                        >
                                            {post.title}
                                        </a>

                                        <p class="mt-1 text-sm text-zinc-500">
                                            {post.type} · {post.updated} · {post.author}
                                        </p>
                                    </div>

                                    <p class="text-sm">
                                        <span
                                            class={`font-medium ${post.status === "Published"
                                                ? "text-emerald-700"
                                                : post.status === "In review"
                                                    ? "text-amber-700"
                                                    : "text-zinc-600"
                                                }`}
                                        >
                                            {post.status}
                                        </span>

                                        {post.views !== "—" && (
                                            <span class="ml-3 text-zinc-500">
                                                {post.views} views
                                            </span>
                                        )}
                                    </p>
                                </li>
                            ))}

                            {filteredPosts.length === 0 && (
                                <li class="py-8 text-sm text-zinc-500">
                                    No content matches “{searchQuery}”.
                                </li>
                            )}
                        </ul>
                    </div>
                </section>

                <section
                    aria-labelledby="schedule-heading"
                    class="grid gap-8 border-t border-zinc-200 py-12 md:grid-cols-[1fr_2fr] md:gap-12"
                >
                    <div>
                        <p class="text-sm font-medium text-zinc-500">
                            Next up
                        </p>

                        <h2
                            id="schedule-heading"
                            class="mt-3 text-3xl font-semibold tracking-tight text-zinc-950"
                        >
                            What happens next
                        </h2>

                        <p class="mt-4 leading-7 text-zinc-600">
                            Upcoming publishing dates to help your team plan ahead.
                        </p>
                    </div>

                    <div>
                        <ul class="divide-y divide-zinc-200">
                            {upcoming.map((item) => (
                                <li
                                    key={item.title}
                                    class="flex items-center gap-5 py-5 first:pt-0"
                                >
                                    <div class="flex size-12 shrink-0 flex-col items-center justify-center border border-zinc-200">
                                        <span class="text-sm font-semibold leading-4">
                                            {item.day}
                                        </span>

                                        <span class="mt-0.5 text-[9px] font-medium uppercase tracking-wide text-zinc-500">
                                            {item.month}
                                        </span>
                                    </div>

                                    <div class="min-w-0">
                                        <p class="text-sm font-medium text-zinc-900">
                                            {item.title}
                                        </p>

                                        <p class="mt-1 text-xs text-zinc-500">
                                            {item.detail}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="/panel/pages"
                            class="mt-3 inline-flex border-t border-zinc-200 pt-4 font-medium text-zinc-950 underline underline-offset-4"
                        >
                            Manage schedule
                        </a>
                    </div>
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
