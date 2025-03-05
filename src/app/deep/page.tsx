export default function DeepPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">Deep Dive</h1>
        <p className="text-lg">
          Welcome to the deep dive page. This is where we explore concepts in greater detail.
        </p>
        <div className="mt-8 p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-sm">
            Current theme: <span className="dark:hidden">Light Mode</span><span className="hidden dark:inline">Dark Mode</span>
          </p>
        </div>
      </div>
    </main>
  );
}
