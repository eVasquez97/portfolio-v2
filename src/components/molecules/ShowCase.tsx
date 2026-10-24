import Image from "next/image";
import React from "react";

type ShowCaseType = {
  items: string[];
  columns?: number;
};

export default function ShowCase({ items, columns = 3 }: ShowCaseType) {
  const numCols = columns || 3;

  const gridColsClass =
    numCols === 3
      ? "grid-cols-2 md:grid-cols-3"
      : numCols === 2
        ? "grid-cols-2"
        : "grid-cols-1";

  return (
    <div
      className={`grid ${gridColsClass} w-full gap-2 overflow-hidden rounded-[22px] sm:gap-2.5`}
    >
      {items.map((itm, index) => {
        const isFeaturedMobile = items.length === 3 && index === 0;

        return (
          <div
            key={itm}
            className={`group relative w-full overflow-hidden rounded-[22px] bg-neutral-200/50 dark:bg-neutral-800/50 ${
              isFeaturedMobile
                ? "row-span-2 h-full min-h-[264px] md:row-span-1 md:h-64"
                : "h-32 md:h-64"
            }`}
          >
            <Image
              alt={itm}
              src={itm}
              width={1000}
              height={1000}
              className="h-full w-full rounded-[22px] object-cover object-[center_20%] opacity-95 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 md:object-center"
            />
          </div>
        );
      })}
    </div>
  );
}
