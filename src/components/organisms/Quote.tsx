import { variableText } from "@/utils/constants";

type QuoteYpes = {
  quote: string;
  style?: string;
};

export default function Quote({ quote, style }: QuoteYpes) {
  return (
    <div
      className={`${variableText} border border-secondaryText-light dark:border-secondaryText-dark bg-secondary-light dark:bg-secondary-dark rounded flex p-4 w-full`}
    >
      <div className="mb-2 w-full">
        <div className="h-3 text-3xl text-left italic">“</div>
        <p className="px-6 text-justify italic">{quote}</p>
        <div className="h-3 text-3xl text-right italic">”</div>
      </div>
    </div>
  );
}
