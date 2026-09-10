import { variableText, variableBg } from "@/utils/constants";

type QuoteYpes = {
  quote: string;
  style?: string;
};

export default function Quote({ quote, style }: QuoteYpes) {
  return (
    <div
      className={`${style} ${variableText} ${variableBg} relative rounded-md border border-secondaryText-light/30 dark:border-secondaryText-dark/30 px-4 py-3.5 shadow-sm w-full font-mono text-xs`}
    >
      <span className="absolute top-2.5 right-3 text-[10px] tracking-wider uppercase opacity-40 select-none"></span>
      <p className="whitespace-pre-line pr-10 opacity-90">{quote}</p>
    </div>
  );
}
