"use client";
import Icon from "@/components/atoms/Icon";
import {
  chevronLeftIcon,
  chevronRightIcon,
  variableText,
} from "@/utils/constants";
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
    <div className="flex flex-col w-full mt-5">
      <div className="flex flex-col justify-between min-h-[210px] mb-4">
        <table className={`${variableText} table w-full text-left`}>
          <thead>
            <tr className="pb-2 border-b border-b-secondaryText-light/30 dark:border-b-secondaryText-dark/30">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`text-sm font-normal opacity-80 pb-2 ${
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
        <div className="flex flex-row items-center justify-center w-full space-x-4 mb-8 text-sm">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Previous Page"
            className={`${variableText} p-1 opacity-60 hover:opacity-100 disabled:opacity-20 transition-opacity flex items-center justify-center`}
          >
            <Icon
              icon={chevronLeftIcon}
              stroke="currentColor"
              styles="w-4 h-4"
            />
          </button>
          <span className={`${variableText} opacity-50 text-xs`}>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
            className={`${variableText} p-1 opacity-60 hover:opacity-100 disabled:opacity-20 transition-opacity flex items-center justify-center`}
          >
            <Icon
              icon={chevronRightIcon}
              stroke="currentColor"
              styles="w-4 h-4"
            />
          </button>
        </div>
      )}
    </div>
  );
}
