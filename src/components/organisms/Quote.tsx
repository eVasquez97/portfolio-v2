import { roboto, ubuntu } from "@/app/fonts";
import { variableBorder, variableText } from "@/utils/constants";

type QuoteProps = {
  quote: string;
  style?: string;
};

export default function Quote({ quote, style }: QuoteProps) {
  return (
    <div
      className={`${ubuntu.className} ${variableText} ${variableBorder} bg-secondary-light dark:bg-secondary-dark rounded flex p-4 w-full`}
    >
      <div className="mb-2 w-full">
        <div className="h-3 text-3xl text-left">“</div>
        <p className={`${roboto.className} px-5 text-justify`}>{quote}</p>
        <div className="h-3 text-3xl text-right">”</div>
      </div>
    </div>
  );
}
