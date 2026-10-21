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
      className={`grid ${gridColsClass} w-full gap-2 overflow-hidden rounded-[20px]`}
    >
      {items.map((itm, index) => {
        const isFeaturedMobile = items.length === 3 && index === 0;

        return (
          <div
            key={itm}
            className={`relative w-full overflow-hidden rounded-2xl ${
              isFeaturedMobile
                ? "row-span-2 h-full min-h-[196px] md:row-span-1 md:h-60"
                : "h-24 md:h-60"
            }`}
          >
            <Image
              alt={itm}
              src={itm}
              width={1000}
              height={1000}
              className="h-full w-full rounded-2xl object-cover opacity-95 transition-opacity hover:opacity-100"
            />
          </div>
        );
      })}
    </div>
  );
}
