export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Skeleton for Hero Section */}
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto animate-pulse"></div>
        </div>

        {/* Skeleton for Update Cards */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Skeleton for Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
