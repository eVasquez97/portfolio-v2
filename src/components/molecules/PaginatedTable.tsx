"use client";
import { variableText } from "@/utils/constants";
import { useState, ReactNode } from "react";

type PaginatedTableProps<T> = {
  headers: string[];
  data: T[];
  renderRow: (item: T, index: number) => ReactNode;
  itemsPerPage?: number;
};

export default function PaginatedTable<T>({
  headers,
  data,
  renderRow,
  itemsPerPage = 4,
}: PaginatedTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-between min-h-[320px] mb-6">
        <table className={`${variableText} table w-full text-left`}>
          <thead>
            <tr className="pb-2 border-b border-b-secondaryText-light/30 dark:border-b-secondaryText-dark/30">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`text-sm opacity-80 font-normal pb-2 ${
                    idx === 0
                      ? "w-24"
                      : idx === headers.length - 1 && headers.length === 3
                      ? "max-w-[44px]"
                      : "px-1"
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, idx) => renderRow(item, startIndex + idx))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex flex-row items-center justify-between w-full mb-8 text-sm">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`${variableText} px-3 py-1.5 rounded border border-secondaryText-light/30 dark:border-secondaryText-dark/30 disabled:opacity-30 hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors`}
          >
            Previous
          </button>
          <span className={`${variableText} opacity-70 text-xs`}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`${variableText} px-3 py-1.5 rounded border border-secondaryText-light/30 dark:border-secondaryText-dark/30 disabled:opacity-30 hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
