"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-20 text-center">
      <h1 className="text-3xl font-semibold mb-2">Something went wrong</h1>
      <p className="text-secondaryText-light dark:text-secondaryText-dark mb-6">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={() => reset()}
        className="text-highlight hover:underline"
      >
        Try again
      </button>
    </div>
  );
}
