export default function DeepPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-4">Deep Dive</h1>
        <p className="text-lg mb-8">
          Welcome to the deep dive page. This is where we explore concepts in greater detail.
        </p>
        <div className="p-4 border rounded-lg">
          <p>
            Current theme: <span className="dark:hidden">Light Mode</span><span className="hidden dark:inline">Dark Mode</span>
          </p>
        </div>
      </div>
    </main>
  );
}
