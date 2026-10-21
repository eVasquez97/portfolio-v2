"use client";

import Icon from "@/components/atoms/Icon";
import ProjectCard from "@/components/organisms/ProjectCard";
import { chevronLeftIcon, chevronRightIcon } from "@/utils/constants";
import Image from "next/image";
import { useMemo, useState } from "react";
import data from "../../utils/data.json";
import projects from "../../utils/projects.json";

const coreTechNames = [
  "TypeScript",
  "React JS",
  "React Native",
  "MongoDB",
  "Next JS",
  "Django",
  "C#",
  "AWS",
];

const allTechMap = new Map(
  [
    ...data.programmingLanguages,
    ...data.frameworks,
    ...data.dbTech,
    ...data.cloudServices,
    ...data.otherTech,
  ].map((item) => [item.name, item]),
);

const allTechStacks = coreTechNames
  .map((name) => allTechMap.get(name))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

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
      if (
        selectedPlatform !== "all" &&
        project.platform.toLowerCase() !== selectedPlatform
      ) {
        return false;
      }

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

  const handleTechChipClick = (techName: string) => {
    setSearchTerm((prev) =>
      prev.toLowerCase() === techName.toLowerCase() ? "" : techName,
    );
    setCurrentPage(1);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedPlatform("all");
    setCurrentPage(1);
  };

  return (
    <section className="flex w-full flex-col space-y-6">
      <header className="space-y-1">
        <h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">
          Projects &amp; Tech Stack
        </h1>
        <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          Core technologies and production applications built across web and
          mobile platforms.
        </p>
      </header>

      {/* Tech Stacks Pill Chips Section */}
      <section aria-labelledby="tech-stacks-heading" className="space-y-2.5">
        <div className="flex flex-wrap gap-2">
          {allTechStacks.map((tech) => {
            const isSelected =
              searchTerm.trim().toLowerCase() === tech.name.toLowerCase();
            return (
              <button
                key={tech.name}
                type="button"
                onClick={() => handleTechChipClick(tech.name)}
                title={`${tech.name} (${tech.experience})`}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? "border-highlight bg-highlight text-white"
                    : "border-neutral-200/80 bg-neutral-100/80 text-neutral-800 hover:bg-neutral-200/70 dark:border-neutral-800/80 dark:bg-neutral-800/50 dark:text-neutral-200 dark:hover:bg-neutral-800"
                }`}
              >
                {tech.logo && (
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={15}
                    height={15}
                    className="h-3.5 w-3.5 flex-shrink-0 object-contain"
                  />
                )}
                <span>{tech.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Search & Filter Controls */}
      <section aria-labelledby="projects-list-heading" className="space-y-4">
        <h2 id="projects-list-heading" className="sr-only">
          Project Directory
        </h2>

        <div className="flex w-full flex-col items-stretch gap-2.5 sm:flex-row sm:items-center">
          {/* Search Input */}
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400 dark:text-neutral-500">
              <svg
                className="h-4 w-4"
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
              placeholder="Search projects (React, Python, Mobile...)"
              className="w-full rounded-full border border-neutral-200/80 bg-neutral-100/80 py-2.5 pl-10 pr-9 text-sm text-neutral-900 placeholder-neutral-500 transition-all focus:border-highlight focus:outline-none focus:ring-2 focus:ring-highlight/30 dark:border-neutral-700/80 dark:bg-neutral-800/60 dark:text-neutral-100 dark:placeholder-neutral-400"
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setCurrentPage(1);
                }}
                aria-label="Clear search text"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400 transition-colors hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                <svg
                  className="h-4 w-4"
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
          <div className="flex shrink-0 items-center gap-1 self-start rounded-full border border-neutral-200/80 bg-neutral-100/80 p-1 dark:border-neutral-700/80 dark:bg-neutral-800/60 sm:self-auto">
            {(["all", "web", "mobile"] as const).map((plat) => (
              <button
                key={plat}
                onClick={() => handlePlatformChange(plat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold capitalize transition-all ${
                  selectedPlatform === plat
                    ? "bg-highlight text-white"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                }`}
              >
                {plat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 1 col mobile (<640px), 2 cols desktop */}
        {currentProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {currentProjects.map((pro) => (
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
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-neutral-200 bg-neutral-50/50 px-4 py-10 text-center dark:border-neutral-800 dark:bg-neutral-900/30">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              No projects found matching &ldquo;{searchTerm}&rdquo;
              {selectedPlatform !== "all" ? ` in ${selectedPlatform}` : ""}
            </p>
            <button
              onClick={handleClear}
              className="text-xs font-semibold text-highlight hover:underline"
            >
              Clear filters and view all
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex w-full flex-row items-center justify-between border-t border-neutral-200/70 pt-3 text-xs dark:border-neutral-800/80">
            <span className="font-medium opacity-75">
              Page {currentPage} of {totalPages} ({filteredProjects.length}{" "}
              total)
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
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
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
      </section>
    </section>
  );
}
