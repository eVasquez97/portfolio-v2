type QuoteProps = {
  quote: string;
  style?: string;
};

export default function Quote({ quote, style }: QuoteProps) {
  return (
    <div
      className={`${style} max-w-4xl p-4 text-text-light dark:text-text-dark bg-secondary-light dark:bg-secondary-dark 
          shadow-sm mx-auto m-4 mb-6`}
    >
      <div className="mb-2">
        <div className="h-3 text-3xl text-left">“</div>
        <p className="px-4 text-base text-justify">{quote}</p>
        <div className="h-3 text-3xl text-right">”</div>
      </div>
    </div>
  );
}
