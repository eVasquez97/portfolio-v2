"use client";

import ProjectCard from "@/components/organisms/ProjectCard";
import projects from "../../utils/projects.json";
import { useState, useMemo } from "react";
import Icon from "@/components/atoms/Icon";
import { chevronLeftIcon, chevronRightIcon } from "@/utils/constants";

const normalizeText = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\.js/g, " js")
    .replace(/nextjs/g, "next js")
    .replace(/reactnative/g, "react native")
    .replace(/nodejs/g, "node js")
    .replace(/expressjs/g, "express js")
    .replace(/fullstack/g, "full stack")
    .replace(/[^a-z0-9\s]/g, " ");

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<
    "all" | "web" | "mobile"
  >("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Platform filter
      if (
        selectedPlatform !== "all" &&
        project.platform.toLowerCase() !== selectedPlatform
      ) {
        return false;
      }

      // Search term filter
      if (!searchTerm.trim()) return true;

      const searchWords = normalizeText(searchTerm)
        .split(/\s+/)
        .filter(Boolean);

      const combinedProjectText = normalizeText(
        [
          project.name,
          project.company,
          project.platform,
          project.role,
          project.jobType,
          project.location,
          project.intro,
          project.fullDesc,
          ...(project.techStack || []),
          ...(project.responsibilities || []),
        ].join(" "),
      );

      return searchWords.every((word) => combinedProjectText.includes(word));
    });
  }, [searchTerm, selectedPlatform]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePlatformChange = (platform: "all" | "web" | "mobile") => {
    setSelectedPlatform(platform);
    setCurrentPage(1);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedPlatform("all");
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center w-full">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400 dark:text-neutral-500">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search projects (React, Python, Puzzle, Mobile...)"
            className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-2xl bg-neutral-100/80 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-highlight/40 focus:border-highlight transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm("");
                setCurrentPage(1);
              }}
              aria-label="Clear search text"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Platform Pills */}
        <div className="flex items-center gap-1 bg-neutral-100/80 dark:bg-neutral-800/60 p-1 rounded-2xl border border-neutral-200/80 dark:border-neutral-700/80 self-start sm:self-auto shrink-0">
          {(["all", "web", "mobile"] as const).map((plat) => (
            <button
              key={plat}
              onClick={() => handlePlatformChange(plat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl capitalize transition-all ${
                selectedPlatform === plat
                  ? "bg-highlight text-white shadow-xs"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              }`}
            >
              {plat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-3">
        {currentProjects.length > 0 ? (
          currentProjects.map((pro) => (
            <ProjectCard
              key={pro.id}
              id={pro.id}
              name={pro.name}
              platform={pro.platform}
              jobType={pro.jobType}
              company={pro.company}
              img={pro.img}
              companyLogo={pro.companyLogo}
              techStack={pro.techStack}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-10 px-4 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 gap-2">
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              No projects found matching &ldquo;{searchTerm}&rdquo;
              {selectedPlatform !== "all" ? ` in ${selectedPlatform}` : ""}
            </p>
            <button
              onClick={handleClear}
              className="text-xs font-medium text-highlight hover:underline"
            >
              Clear filters and view all
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-row items-center justify-between w-full pt-3 border-t border-neutral-100 dark:border-neutral-800/80 text-xs">
          <span className="opacity-60 font-medium">
            Page {currentPage} of {totalPages} ({filteredProjects.length} total)
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
