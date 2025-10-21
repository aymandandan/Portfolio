'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import UpdateCard from "@/components/updates/UpdateCard";
import { profileData } from "@/data/profile";
import Pagination from "@/components/Pagination";

const ITEMS_PER_PAGE = 3;

function UpdatesContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const currentPage = Math.max(1, parseInt(page || "1", 10));
  const updates = profileData.updates || [];
  const totalPages = Math.ceil(updates.length / ITEMS_PER_PAGE);

  if (currentPage > totalPages) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">No updates found on this page.</p>
        <Link 
          href="/updates" 
          className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
        >
          Go to first page
        </Link>
      </div>
    );
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUpdates = updates.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`${pathname}?${params.toString()}`);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8">
      {paginatedUpdates.map((update) => (
        <UpdateCard key={update.id} update={update} />
      ))}
      
      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
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
