'use client';

import { Suspense } from 'react';
import { useSearchParams, notFound } from "next/navigation";
import Link from "next/link";
import UpdateCard from "@/components/updates/UpdateCard";
import { profileData } from "@/data/profile";

const ITEMS_PER_PAGE = 3;

function UpdatesContent() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
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
    <div className="space-y-8">
      {paginatedUpdates.map((update) => (
        <UpdateCard key={update.id} update={update} />
      ))}
      
      {totalPages > 1 && (
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          {currentPage > 1 && (
            <Link
              href={`/updates?page=${currentPage - 1}`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Previous
            </Link>
          )}
          <span className="text-gray-600 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          {currentPage < totalPages && (
            <Link
              href={`/updates?page=${currentPage + 1}`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4">
            Latest Updates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stay updated with my latest work and thoughts
          </p>
        </div>

        <Suspense fallback={
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading updates...</p>
          </div>
        }>
          <UpdatesContent />
        </Suspense>
      </div>
    </div>
  );
}
