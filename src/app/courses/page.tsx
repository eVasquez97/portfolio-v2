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
  const [selectedProvider, setSelectedProvider] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const providers = [
    "All",
    ...Array.from(new Set(courses.map((c) => c.company))),
  ];

  const filteredCourses =
    selectedProvider === "All"
      ? courses
      : courses.filter((c) => c.company === selectedProvider);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleProviderChange = (provider: string) => {
    setSelectedProvider(provider);
    setCurrentPage(1);
  };

  return (
    <div className="flex w-full flex-col space-y-5">
      <Quote quote="Do or do not, there is no try. - Yoda" />

      <header className="space-y-3">
        <div className="space-y-1">
          <h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">
            Courses &amp; Certifications
          </h1>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
            Continuous learning and verified technical credentials.
          </p>
        </div>

        {/* Provider Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {providers.map((provider) => {
            const isSelected = selectedProvider === provider;
            return (
              <button
                key={provider}
                type="button"
                onClick={() => handleProviderChange(provider)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all ${
                  isSelected
                    ? "border-highlight bg-highlight text-white"
                    : "border-neutral-200/80 bg-neutral-100/80 text-neutral-800 hover:bg-neutral-200/70 dark:border-neutral-800/80 dark:bg-neutral-800/50 dark:text-neutral-200 dark:hover:bg-neutral-800"
                }`}
              >
                {provider}
              </button>
            );
          })}
        </div>
      </header>

      {/* 2-Column Credential Cards Grid */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {currentCourses.map((course) => {
          const config = providerConfigs[course.company] || defaultConfig;

          return (
            <Link
              key={course.certificationID}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <article className="card-interactive flex h-full flex-col justify-between gap-3.5 p-4">
                <div className="space-y-2.5">
                  {/* Top Row: Provider Badge & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border ${config.bg} ${config.border}`}
                      >
                        <svg
                          className={`h-4 w-4 ${config.text}`}
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
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${config.badgeBg}`}
                      >
                        {course.company}
                      </span>
                    </div>

                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {course.time}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h2 className="line-clamp-2 text-sm font-bold leading-snug text-neutral-900 transition-colors group-hover:text-highlight dark:text-neutral-100 sm:text-base">
                    {course.name}
                  </h2>
                </div>

                {/* Footer Row: Credential ID & Verify Action */}
                <div className="flex items-center justify-between gap-2 border-t border-neutral-200/60 pt-2.5 text-[11px] dark:border-neutral-800/60">
                  <span
                    className="truncate font-mono text-neutral-500 dark:text-neutral-400"
                    title={`ID: ${course.certificationID}`}
                  >
                    ID:{" "}
                    {course.certificationID.length > 14
                      ? `${course.certificationID.slice(0, 14)}...`
                      : course.certificationID}
                  </span>

                  <span className="inline-flex flex-shrink-0 items-center gap-1 font-semibold text-highlight transition-transform group-hover:translate-x-0.5">
                    <span>Verify</span>
                    <Icon
                      icon={showIcon}
                      stroke="currentColor"
                      styles="w-3 h-3"
                    />
                  </span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex w-full flex-row items-center justify-between border-t border-neutral-200/70 pt-3 text-xs dark:border-neutral-800/80">
          <span className="font-medium opacity-75">
            Page {currentPage} of {totalPages} ({filteredCourses.length} total)
          </span>
          <div className="flex flex-row items-center space-x-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className="flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 font-medium text-neutral-800 transition-all hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-30 dark:border-neutral-700/80 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
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
              className="flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 font-medium text-neutral-800 transition-all hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-30 dark:border-neutral-700/80 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
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
