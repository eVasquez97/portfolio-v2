import { lora } from "@/app/fonts";
import { variableBg, variableText } from "@/utils/constants";

type QuoteYpes = {
  quote: string;
  style?: string;
};

export default function Quote({ quote, style }: QuoteYpes) {
  return (
    <div
      className={`${lora.className} ${variableText} ${variableBg} flex p-4 w-full border rounded border-secondaryText-light dark:border-secondaryText-dark`}
    >
      <div className="mb-2 w-full">
        <div className="h-3 text-3xl text-left italic">“</div>
        <p className="px-6 italic">{quote}</p>
        <div className="h-3 text-3xl text-right italic">”</div>
      </div>
    </div>
  );
}
