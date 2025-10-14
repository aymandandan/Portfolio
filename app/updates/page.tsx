import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import PaginatedUpdates from '@/components/updates/PaginatedUpdates';
import { profileData } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Updates | My Portfolio',
  description:
    'Stay updated with my latest work, thoughts, and experiences in web development.',
};

export default function UpdatesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Math.max(1, parseInt(searchParams.page || '1', 10));
  const totalPages = Math.ceil(profileData.updates.length / 3); // 3 items per page

  if (currentPage > totalPages) {
    notFound();
  }

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

        <Suspense fallback={<div>Loading updates...</div>}>
          <PaginatedUpdates />
        </Suspense>
      </div>
    </div>
  );
}
