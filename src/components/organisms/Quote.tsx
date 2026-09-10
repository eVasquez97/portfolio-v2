import { variableText, variableBg } from "@/utils/constants";

type QuoteYpes = {
  quote: string;
  style?: string;
};

export default function Quote({ quote, style }: QuoteYpes) {
  return (
    <div
      className={`${style} ${variableText} ${variableBg} flex p-4 w-full rounded-lg border border-secondaryText-light/30 dark:border-secondaryText-dark/30`}
    >
      <div className="mb-2 w-full">
        <div className="h-3 text-3xl text-left italic opacity-60">“</div>
        <p className="px-6 italic">{quote}</p>
        <div className="h-3 text-3xl text-right italic opacity-60">”</div>
      </div>
    </div>
  );
}
