"use client";
import Icon from "@/components/atoms/Icon";
import { chevronLeftIcon, chevronRightIcon } from "@/utils/constants";
import { useState, ReactNode } from "react";

type PaginatedTableProps<T> = {
  headers: string[];
  data: T[];
  children: (item: T, index: number) => ReactNode;
  itemsPerPage?: number;
};

export default function PaginatedTable<T>({
  headers,
  data,
  children,
  itemsPerPage = 5,
}: PaginatedTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col justify-between w-full h-full min-h-0 animate-fade-in">
      <div className="flex flex-col w-full overflow-hidden">
        <table className="table w-full text-left border-collapse">
          <thead>
            <tr className="table-header-border">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`text-xs font-semibold uppercase tracking-wider opacity-60 pb-3 pt-1 ${
                    idx === 0
                      ? "w-24"
                      : idx === headers.length - 1 && headers.length === 3
                        ? "max-w-[44px]"
                        : "px-2"
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/60">
            {currentData.map((item, idx) => children(item, startIndex + idx))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex flex-row items-center justify-between w-full pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-800/80 text-xs">
          <span className="opacity-60 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex flex-row items-center space-x-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700/80 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center font-medium"
            >
              <Icon
                icon={chevronLeftIcon}
                stroke="currentColor"
                styles="w-3.5 h-3.5 mr-1"
              />
              Prev
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
              className="px-2.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700/80 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center font-medium"
            >
              Next
              <Icon
                icon={chevronRightIcon}
                stroke="currentColor"
                styles="w-3.5 h-3.5 ml-1"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
