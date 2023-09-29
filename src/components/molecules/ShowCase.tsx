import Image from "next/image";
import React from "react";

type ShowCaseType = {
  items: string[];
  columns?: number;
};

export default function ShowCase({ items, columns }: ShowCaseType) {
  const cols = columns ? "grid-cols-" + columns.toString() : "grid-cols-3";

  return (
    <div className={`grid ${cols} gap-3`}>
      {items.map((itm) => {
        return (
          <div className="flex w-full bg-cover bg-no-repeat" key={itm}>
            <Image
              alt={itm}
              src={itm}
              width={1000}
              height={1000}
              className="rounded w-full h-40 object-cover hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
}
