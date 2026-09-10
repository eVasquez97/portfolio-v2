import Image from "next/image";
import React from "react";

type ShowCaseType = {
  items: string[];
  columns?: number;
};

export default function ShowCase({ items, columns = 3 }: ShowCaseType) {
  const numCols = columns || 3;

  const colsData: string[][] = Array.from({ length: numCols }, () => []);
  items.forEach((item, index) => {
    if (numCols === 2 && items.length === 3) {
      if (index === 0) colsData[0].push(item);
      else colsData[1].push(item);
    } else {
      colsData[index % numCols].push(item);
    }
  });

  return (
    <div className={`grid grid-cols-1 md:grid-cols-${numCols} gap-2 w-full`}>
      {colsData.map((colItems, colIdx) => (
        <div className="flex flex-col gap-2 w-full" key={colIdx}>
          {colItems.map((itm, itemIdx) => (
            <div
              className="flex w-full bg-cover bg-no-repeat flex-1"
              key={itemIdx}
            >
              <Image
                alt={itm}
                src={itm}
                width={1000}
                height={1000}
                className="w-full h-32 md:h-full object-cover opacity-95 rounded-lg hover:opacity-100"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
