import { MandoSticker } from "@/components/atoms";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-fade-in flex min-h-[320px] w-full flex-col items-center justify-center py-20 text-center"
    >
      <div
        aria-hidden="true"
        className="relative flex items-center justify-center"
      >
        {/* Ambient highlight glow */}
        <div className="absolute h-16 w-16 rounded-full bg-highlight/20 blur-md animate-pulse" />

        {/* Rotating Beskar / Highlight orbital ring */}
        <div className="h-14 w-14 animate-spin rounded-full border-2 border-neutral-200/80 border-t-highlight dark:border-neutral-800/80 dark:border-t-highlight" />

        {/* Centered Mando helmet badge */}
        <div className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200/80 bg-neutral-100/90 shadow-sm backdrop-blur-sm dark:border-neutral-800/80 dark:bg-neutral-900/90">
          <MandoSticker />
        </div>
      </div>

      <p className="mt-4 font-mono text-xs tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
        This is the way...
      </p>
      <span className="sr-only">Loading content...</span>
    </div>
  );
}
