import Image from "next/image";
import React from "react";

type ShowCaseType = {
  items: string[];
  columns?: number;
};

export default function ShowCase({ items, columns }: ShowCaseType) {
  const cols = columns ? "grid-cols-" + columns.toString() : "md:grid-cols-4";

  return (
    <div className={`grid grid-cols-2 ${cols} gap-2`}>
      {items.map((itm) => {
        return (
          <div className="flex w-full bg-cover bg-no-repeat" key={itm}>
            <Image
              alt={itm}
              src={itm}
              width={1000}
              height={1000}
              className="w-full h-40 object-cover opacity-95 rounded hover:opacity-100"
            />
          </div>
        );
      })}
    </div>
  );
}
