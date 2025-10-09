import Link from "next/link";

interface UpdateCardProps {
  update: Update;
}

export interface Update {
  id: number;
  title: string;
  date: string;
  category: string;
  readTime: number;
  excerpt: string;
  content: string;
}

export default function UpdateCard({ update }: UpdateCardProps) {
  const date = new Date(update.date);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="bg-primary-500 dark:bg-primary-600 text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
          <span className="text-3xl font-bold">{day}</span>
          <span className="text-sm uppercase tracking-wider">{month}</span>
          <span className="text-sm">{year}</span>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {update.title}
          </h2>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
            <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full font-medium">
              {update.category}
            </span>
            <span>{update.readTime} min read</span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
            {update.excerpt}
          </p>

          <Link
            href={`/updates/${update.id}`}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
          >
            Read Full Post
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
