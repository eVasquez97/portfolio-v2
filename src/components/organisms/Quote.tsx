type QuoteProps = {
  quote: string;
  style?: string;
};

export default function Quote({ quote, style = "" }: QuoteProps) {
  // Split quote and author if available (e.g. "Quote text - Author")
  const parts = quote.split(/\s*[-—]\s*/);
  const quoteText = parts[0];
  const author = parts[1];

  return (
    <div
      className={`relative w-full rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/80 dark:bg-neutral-800/50 p-3.5 sm:p-4 shadow-2xs backdrop-blur-md ${style}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-highlight/10 text-highlight shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.323 1.206-4.8 3.012-4.8 4.8 0 1.05.6 1.8 1.8 1.8 1.5 0 2.4 1.2 2.4 2.4 0 1.5-1.2 2.7-2.7 2.7-.825 0-1.575-.375-2.04-1.18zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.323 1.206-4.8 3.012-4.8 4.8 0 1.05.6 1.8 1.8 1.8 1.5 0 2.4 1.2 2.4 2.4 0 1.5-1.2 2.7-2.7 2.7-.825 0-1.575-.375-2.04-1.18z" />
            </svg>
          </span>
          <p className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
            &ldquo;{quoteText}&rdquo;
          </p>
        </div>

        {author && (
          <span className="text-[11px] font-semibold text-highlight bg-highlight/10 px-2.5 py-1 rounded-full shrink-0 self-start sm:self-center">
            — {author}
          </span>
        )}
      </div>
    </div>
  );
}
