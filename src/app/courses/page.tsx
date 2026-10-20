"use client";

import Icon from "@/components/atoms/Icon";
import { Quote } from "@/components/organisms";
import Link from "next/link";
import data from "../../utils/data.json";
import { showIcon, chevronLeftIcon, chevronRightIcon } from "@/utils/constants";
import { useState } from "react";

interface ProviderConfig {
  bg: string;
  text: string;
  border: string;
  badgeBg: string;
  iconPath: string;
}

const providerConfigs: Record<string, ProviderConfig> = {
  Udemy: {
    bg: "bg-purple-500/10 dark:bg-purple-500/20",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-500/30",
    badgeBg:
      "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
    iconPath:
      "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.666-6.479L12 14z",
  },
  Cisco: {
    bg: "bg-sky-500/10 dark:bg-sky-500/20",
    text: "text-sky-600 dark:text-sky-400",
    border: "border-sky-500/30",
    badgeBg: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  SoloLearn: {
    bg: "bg-teal-500/10 dark:bg-teal-500/20",
    text: "text-teal-600 dark:text-teal-400",
    border: "border-teal-500/30",
    badgeBg:
      "bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/30",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  "Código Facilito": {
    bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/30",
    badgeBg:
      "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  EDx: {
    bg: "bg-rose-500/10 dark:bg-rose-500/20",
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-500/30",
    badgeBg:
      "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30",
    iconPath:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
};

const defaultConfig: ProviderConfig = {
  bg: "bg-highlight/10 dark:bg-highlight/20",
  text: "text-highlight",
  border: "border-highlight/30",
  badgeBg: "bg-highlight/15 text-highlight border-highlight/30",
  iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
};

export default function CoursesPage() {
  const { courses } = data;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col w-full space-y-4">
      <Quote quote="Do or do not, there is no try. - Yoda" style="mb-2" />

      <div className="flex flex-col gap-3">
        {currentCourses.map((course) => {
          const config = providerConfigs[course.company] || defaultConfig;

          return (
            <Link
              key={course.certificationID}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="card-interactive p-3.5 sm:p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shadow-sm hover:shadow">
                <div className="flex items-center space-x-3.5 min-w-0 flex-1 w-full">
                  {/* Brand / Provider Avatar Badge */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${config.bg} border ${config.border} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200`}
                  >
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${config.text}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={config.iconPath}
                      />
                    </svg>
                  </div>

                  {/* Course Metadata */}
                  <div className="flex flex-col min-w-0 flex-1 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border ${config.badgeBg}`}
                      >
                        {course.company}
                      </span>
                      <span className="text-[11px] font-medium opacity-60">
                        {course.time}
                      </span>
                      <span
                        className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-neutral-200/50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 opacity-80 truncate max-w-[130px] sm:max-w-[180px]"
                        title={`ID: ${course.certificationID}`}
                      >
                        #
                        {course.certificationID.length > 12
                          ? `${course.certificationID.slice(0, 12)}...`
                          : course.certificationID}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-highlight transition-colors line-clamp-2">
                      {course.name}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-highlight opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0 self-end sm:self-center bg-highlight/10 px-2.5 py-1 rounded-lg border border-highlight/20">
                  <span>Verify</span>
                  <Icon
                    icon={showIcon}
                    stroke="currentColor"
                    styles="w-3.5 h-3.5"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-row items-center justify-between w-full pt-3 border-t border-neutral-100 dark:border-neutral-800/80 text-xs">
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
