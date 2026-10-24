export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex w-full flex-col items-center justify-center py-20 text-center"
    >
      <div
        aria-hidden="true"
        className="mb-3 h-6 w-6 animate-spin rounded-full border-2 border-highlight border-t-transparent"
      />
      <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
        Loading...
      </p>
    </div>
  );
}
