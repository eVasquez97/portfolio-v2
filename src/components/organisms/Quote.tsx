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
    <figure
      className={`animate-fade-in relative w-full rounded-2xl border border-neutral-200/80 bg-neutral-100/80 p-3.5 shadow-2xs backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-800/50 sm:rounded-3xl sm:p-4 ${style}`}
    >
      <div className="flex flex-col justify-between gap-2.5 sm:flex-row sm:items-center sm:gap-4">
        <blockquote className="flex min-w-0 flex-1 items-center gap-3 font-sans">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-highlight/10 text-highlight sm:h-8 sm:w-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.323 1.206-4.8 3.012-4.8 4.8 0 1.05.6 1.8 1.8 1.8 1.5 0 2.4 1.2 2.4 2.4 0 1.5-1.2 2.7-2.7 2.7-.825 0-1.575-.375-2.04-1.18zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.323 1.206-4.8 3.012-4.8 4.8 0 1.05.6 1.8 1.8 1.8 1.5 0 2.4 1.2 2.4 2.4 0 1.5-1.2 2.7-2.7 2.7-.825 0-1.575-.375-2.04-1.18z" />
            </svg>
          </span>
          <p className="text-xs font-medium text-neutral-800 dark:text-neutral-200 sm:text-sm">
            &ldquo;{quoteText}&rdquo;
          </p>
        </blockquote>

        {author && (
          <figcaption className="shrink-0 self-start rounded-full bg-highlight/10 px-2.5 py-1 text-[11px] font-semibold text-highlight sm:self-center">
            — {author}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
