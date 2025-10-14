import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import UpdateCard from "@/components/updates/UpdateCard";
import { profileData } from "@/data/profile";

const ITEMS_PER_PAGE = 3;

type SearchParams = {
  params: Record<string, never>;
  searchParams: {
    page?: string;
  };
};

export const metadata: Metadata = {
  title: "Updates | My Portfolio",
  description:
    "Stay updated with my latest work, thoughts, and experiences in web development.",
};

export default async function UpdatesPage({ searchParams }: SearchParams) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page || "1", 10));
  const updates = profileData.updates || [];
  const totalPages = Math.ceil(updates.length / ITEMS_PER_PAGE);

  if (currentPage > totalPages) {
    notFound();
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUpdates = updates.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
            Latest Updates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stay updated with my latest work and thoughts
          </p>
        </div>

        {/* Updates Grid */}
        <div className="space-y-8">
          {paginatedUpdates.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href={`/updates?page=${currentPage - 1}`}
              className={`px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-disabled={currentPage === 1}
              tabIndex={currentPage === 1 ? -1 : undefined}
            >
              Previous
            </Link>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Link
                    key={page}
                    href={`/updates?page=${page}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-md ${
                      currentPage === page
                        ? "bg-primary-600 text-white font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    } transition-colors`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </Link>
                )
              )}
            </div>

            <Link
              href={`/updates?page=${currentPage + 1}`}
              className={`px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : undefined}
            >
              Next
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
