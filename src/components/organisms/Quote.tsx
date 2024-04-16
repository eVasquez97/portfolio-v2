import { variableText } from "@/utils/constants";

type QuoteYpes = {
  quote: string;
  style?: string;
};

export default function Quote({ quote, style }: QuoteYpes) {
  return (
    <div
      className={`${style} ${variableText} flex p-4 w-full rounded bg-secondaryText-light dark:bg-secondaryText-dark opacity-60 dark:opacity-80`}
    >
      <div className="mb-2 w-full">
        <div className="h-3 text-3xl text-left italic">“</div>
        <p className="px-6 italic">{quote}</p>
        <div className="h-3 text-3xl text-right italic">”</div>
      </div>
    </div>
  );
}
