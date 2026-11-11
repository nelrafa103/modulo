import { useEffect, useState } from "preact/hooks";
import {
    columnFilteringFeature,
    createFilteredRowModel,
    createPaginatedRowModel,
    createSortedRowModel,
    globalFilteringFeature,
    rowPaginationFeature,
    rowSortingFeature,
    tableFeatures,
    useTable,
    type ColumnDef,
} from "@tanstack/preact-table";

import Logo from "../../../assets/614d1097-0a5e-4738-8119-975b124dd369.webp";
import Button from "../../../components/button";

type ContentItem = {
    title: string;
    type: string;
    status: "Published" | "In review" | "Draft";
    updatedAt: string;
    author: string;
    views: number;
};

const navigation = [
    { label: "Overview", href: "/dashboard" },
    { label: "Pages", href: "/dashboard/pages" },
    { label: "Team", href: "/dashboard/users" },
    { label: "Analytics", href: "/dashboard/tables" },
    { label: "Settings", href: "/dashboard/settings" },
];

const features = tableFeatures({
    columnFilteringFeature,
    globalFilteringFeature,
    rowSortingFeature,
    rowPaginationFeature,
    filteredRowModel: createFilteredRowModel(),
    sortedRowModel: createSortedRowModel(),
    paginatedRowModel: createPaginatedRowModel(),
});

const data: ContentItem[] = [
    {
        title: "The future of content operations",
        type: "Blog post",
        status: "Published",
        updatedAt: "2026-11-06T09:30:00",
        author: "Alex Morgan",
        views: 2481,
    },
    {
        title: "Product updates — October",
        type: "Announcement",
        status: "Published",
        updatedAt: "2026-11-05T14:15:00",
        author: "Jordan Lee",
        views: 1904,
    },
    {
        title: "Getting started with your workspace",
        type: "Documentation",
        status: "In review",
        updatedAt: "2026-11-03T11:00:00",
        author: "Sam Kim",
        views: 0,
    },
    {
        title: "A simpler way to manage your media",
        type: "Blog post",
        status: "Draft",
        updatedAt: "2026-10-29T16:45:00",
        author: "Alex Morgan",
        views: 0,
    },
    {
        title: "Building a thoughtful editorial calendar",
        type: "Guide",
        status: "Published",
        updatedAt: "2026-10-27T10:20:00",
        author: "Sam Kim",
        views: 1622,
    },
    {
        title: "Introducing shared workspaces",
        type: "Announcement",
        status: "Published",
        updatedAt: "2026-10-24T13:05:00",
        author: "Jordan Lee",
        views: 1387,
    },
    {
        title: "A guide to content reviews",
        type: "Documentation",
        status: "In review",
        updatedAt: "2026-10-22T09:00:00",
        author: "Alex Morgan",
        views: 0,
    },
    {
        title: "Making your media library work for you",
        type: "Blog post",
        status: "Draft",
        updatedAt: "2026-10-19T15:40:00",
        author: "Sam Kim",
        views: 0,
    },
    {
        title: "October community highlights",
        type: "Newsletter",
        status: "Published",
        updatedAt: "2026-10-16T08:30:00",
        author: "Jordan Lee",
        views: 984,
    },
    {
        title: "Writing for a global audience",
        type: "Blog post",
        status: "Published",
        updatedAt: "2026-10-12T12:10:00",
        author: "Alex Morgan",
        views: 876,
    },
    {
        title: "Workspace permissions explained",
        type: "Documentation",
        status: "Draft",
        updatedAt: "2026-10-09T10:00:00",
        author: "Sam Kim",
        views: 0,
    },
    {
        title: "September product notes",
        type: "Announcement",
        status: "Published",
        updatedAt: "2026-10-02T09:15:00",
        author: "Jordan Lee",
        views: 742,
    },
];

const columns: ColumnDef<typeof features, ContentItem>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "updatedAt",
        header: "Last updated",
        cell: ({ getValue }) =>
            new Date(getValue<string>()).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            }),
    },
    {
        accessorKey: "author",
        header: "Author",
    },
    {
        accessorKey: "views",
        header: "Views",
        cell: ({ getValue }) => {
            const views = getValue<number>();
            return views > 0 ? views.toLocaleString("en-US") : "—";
        },
    },
];

export default function Tables() {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All statuses");

    const table = useTable(
        {
            features,
            columns,
            data,
            initialState: {
                pagination: {
                    pageIndex: 0,
                    pageSize: 5,
                },
                sorting: [{ id: "updatedAt", desc: true }],
            },
        },
        (state) => ({
            pagination: state.pagination,
        }),
    );

    useEffect(() => {
        table.setGlobalFilter(searchQuery);

        table
            .getColumn("status")
            ?.setFilterValue(
                statusFilter === "All statuses" ? undefined : statusFilter,
            );
    }, [searchQuery, statusFilter]);

    const pagination = table.state.pagination;
    const rowCount = table.getRowCount();
    const pageCount = Math.max(table.getPageCount(), 1);

    const firstRow =
        rowCount === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1;

    const lastRow = Math.min(
        (pagination.pageIndex + 1) * pagination.pageSize,
        rowCount,
    );

    return (
        <>
            <title>Content table | Modulo</title>
            <meta
                name="description"
                content="Search, filter, sort, and browse your workspace content."
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
                                    class={`font-medium ${item.href === "/dashboard/tables"
                                        ? "text-zinc-950"
                                        : "text-zinc-600 hover:text-zinc-950"
                                        }`}
                                    href={item.href}
                                    aria-current={
                                        item.href === "/dashboard/tables" ? "page" : undefined
                                    }
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <Button as="a" href="/dashboard/pages" rel="prefetch">
                            Create content
                        </Button>
                    </div>
                </nav>

                <section class="py-16 md:py-24">
                    <div class="max-w-3xl">
                        <p class="text-sm font-medium text-zinc-500">
                            Workspace · Analytics
                        </p>

                        <h1 class="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                            Content library
                        </h1>

                        <p class="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                            Browse every page in your workspace. Search by title, filter by
                            status, or sort the list to find what you need.
                        </p>
                    </div>
                </section>

                <section
                    aria-labelledby="content-list-heading"
                    class="border-t border-zinc-200 py-12"
                >
                    <div class="flex flex-col gap-5 border-b border-zinc-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p class="text-sm font-medium text-zinc-500">
                                Workspace content
                            </p>

                            <h2
                                id="content-list-heading"
                                class="mt-2 text-2xl font-semibold tracking-tight text-zinc-950"
                            >
                                All pages
                            </h2>
                        </div>

                        <div class="flex flex-col gap-3 sm:flex-row">
                            <label class="flex h-10 items-center gap-2 rounded-sm border border-zinc-200 px-3 text-zinc-400 focus-within:border-zinc-400">
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
                                    class="w-full border-0 bg-transparent p-0 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-0 sm:w-48"
                                    type="search"
                                    placeholder="Search content..."
                                    aria-label="Search content"
                                />
                            </label>

                            <label class="sr-only" for="status-filter">
                                Filter by status
                            </label>

                            <select
                                id="status-filter"
                                value={statusFilter}
                                onChange={(event) =>
                                    setStatusFilter(event.currentTarget.value)
                                }
                                class="h-10 rounded-sm border border-zinc-200 bg-white px-3 text-sm text-zinc-700 focus:border-zinc-400 focus:outline-none focus:ring-0"
                            >
                                <option>All statuses</option>
                                <option>Published</option>
                                <option>In review</option>
                                <option>Draft</option>
                            </select>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[760px] text-left text-sm">
                            <thead class="border-b border-zinc-200 text-xs text-zinc-500">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <th
                                                key={header.id}
                                                class="px-4 py-3 first:pl-0 last:pr-0"
                                            >
                                                {!header.isPlaceholder && (
                                                    <button
                                                        type="button"
                                                        class="inline-flex items-center gap-2 font-medium hover:text-zinc-950 disabled:cursor-default"
                                                        disabled={!header.column.getCanSort()}
                                                        aria-label={`Sort by ${header.column.id}`}
                                                        onClick={header.column.getToggleSortingHandler()}
                                                    >
                                                        <table.FlexRender header={header} />

                                                        {header.column.getIsSorted() === "asc" && (
                                                            <span aria-hidden="true">↑</span>
                                                        )}

                                                        {header.column.getIsSorted() === "desc" && (
                                                            <span aria-hidden="true">↓</span>
                                                        )}
                                                    </button>
                                                )}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>

                            <tbody class="divide-y divide-zinc-100">
                                {table.getRowModel().rows.length > 0 ? (
                                    table.getRowModel().rows.map((row) => (
                                        <tr key={row.id} class="hover:bg-zinc-50/70">
                                            {row.getAllCells().map((cell) => (
                                                <td
                                                    key={cell.id}
                                                    class="px-4 py-4 first:pl-0 last:pr-0"
                                                >
                                                    <table.FlexRender cell={cell} />
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={columns.length}
                                            class="py-12 text-center text-sm text-zinc-500"
                                        >
                                            No content matches the current search or status filter.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div class="flex flex-col gap-4 border-t border-zinc-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <p class="text-sm text-zinc-500">
                            Showing {firstRow}–{lastRow} of {rowCount}
                        </p>

                        <div class="flex items-center gap-2">
                            <label for="page-size" class="mr-2 text-sm text-zinc-500">
                                Rows per page
                            </label>

                            <select
                                id="page-size"
                                value={pagination.pageSize}
                                onChange={(event) =>
                                    table.setPageSize(Number(event.currentTarget.value))
                                }
                                class="h-9 rounded-sm border border-zinc-200 bg-white px-2 text-sm text-zinc-700"
                            >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>

                            <button
                                type="button"
                                class="ml-2 rounded-sm border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40"
                                disabled={!table.getCanPreviousPage()}
                                onClick={() => table.previousPage()}
                            >
                                Previous
                            </button>

                            <button
                                type="button"
                                class="rounded-sm border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40"
                                disabled={!table.getCanNextPage()}
                                onClick={() => table.nextPage()}
                            >
                                Next
                            </button>
                        </div>

                        <p class="text-sm text-zinc-500">
                            Page {Math.min(pagination.pageIndex + 1, pageCount)} of{" "}
                            {pageCount}
                        </p>
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