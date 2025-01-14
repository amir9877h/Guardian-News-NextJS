import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center font-serif overflow-hidden transition-colors duration-300">
      <div className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/50 dark:border-gray-700 text-center transition-colors duration-300">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
          We couldn&apos;t find the page you were looking for. Perhaps it&apos;s been
          moved or no longer exists.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border-2 border-blue-800 dark:border-blue-500 text-blue-800 dark:text-blue-500 rounded-md font-medium transition duration-300 hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-900 dark:hover:border-blue-300 hover:text-blue-900 dark:hover:text-blue-300"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}