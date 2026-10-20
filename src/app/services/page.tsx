"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote } from "@/components/organisms";
import { Title } from "@/components/atoms";
import data from "../../utils/data.json";

interface TechItem {
  name: string;
  experience: string;
  description?: string;
  logo?: string;
  category: "Languages" | "Frameworks" | "Databases" | "Cloud";
}

const allTechItems: TechItem[] = [
  ...data.programmingLanguages.map((item) => ({
    ...item,
    category: "Languages" as const,
  })),
  ...data.frameworks.map((item) => ({
    ...item,
    category: "Frameworks" as const,
  })),
  ...data.dbTech.map((item) => ({
    ...item,
    category: "Databases" as const,
  })),
  ...data.cloudServices.map((item) => ({
    ...item,
    category: "Cloud" as const,
  })),
];

const categories = ["Languages", "Frameworks", "Databases", "Cloud"] as const;

const serviceIcons: Record<string, string> = {
  "Software Analyst":
    "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "Software Developer": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  "Hardware maintenance":
    "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m16-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  "Technical Interviewer":
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
};

function TechCard({ item }: { item: TechItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card-interactive p-3.5 sm:p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex items-center space-x-3.5 shadow-sm hover:shadow">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-200/60 dark:bg-neutral-800/80 flex items-center justify-center flex-shrink-0 p-2 border border-neutral-300/40 dark:border-neutral-700/50">
        {item.logo && !imgError ? (
          <Image
            src={item.logo}
            alt={item.name}
            width={28}
            height={28}
            className="object-contain w-full h-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="font-bold text-xs text-highlight">
            {item.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1.5">
          <p className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 truncate">
            {item.name}
          </p>
          <span className="text-[10px] font-semibold text-highlight bg-highlight/10 px-2.5 py-0.5 rounded-full border border-highlight/20 flex-shrink-0">
            {item.experience}
          </span>
        </div>
        {item.description && (
          <p className="text-[11px] opacity-65 truncate mt-0.5">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  const { services } = data;
  const [selectedCategory, setSelectedCategory] = useState<string>("Languages");

  const filteredTech = allTechItems.filter(
    (t) => t.category === selectedCategory,
  );

  return (
    <div className="w-full flex flex-col space-y-10 sm:space-y-12">
      {/* Modernized Tech Stack Matrix */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
          <div>
            <Title text="Tech Stack & Skills" styles="text-lg sm:text-xl" />
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
              Technologies and frameworks used across production systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all border ${
                    active
                      ? "bg-highlight text-white border-highlight shadow-sm"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700/80 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {filteredTech.map((item) => (
            <TechCard key={`${item.category}-${item.name}`} item={item} />
          ))}
        </div>
      </section>

      {/* Modernized Engineering Services Grid */}
      <section className="space-y-4">
        <div>
          <Title text="Engineering Services" styles="text-lg sm:text-xl" />
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            Core technical services and engineering capabilities I offer:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services?.map((sr) => {
            const iconPath =
              serviceIcons[sr.service] || "M13 10V3L4 14h7v7l9-11h-7z";

            return (
              <div
                key={sr.service}
                className="card-interactive p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-2xl bg-highlight/10 border border-highlight/20 flex items-center justify-center text-highlight flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={iconPath}
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                      {sr.service}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed opacity-80">
                    {sr.description}
                  </p>
                </div>

                {sr.benefits && sr.benefits.length > 0 && (
                  <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-col gap-1.5">
                    {sr.benefits.map((b) => (
                      <div
                        key={b}
                        className="inline-flex items-start gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-700 dark:text-neutral-300"
                      >
                        <span className="text-highlight font-bold text-xs leading-none mt-0.5">
                          ✓
                        </span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <div className="pt-2">
        <Quote quote="Always in motion the future is. - Yoda" />
      </div>
    </div>
  );
}
