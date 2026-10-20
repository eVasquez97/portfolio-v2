import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components/atoms";
import data from "../../../utils/projects.json";
import tech from "../../../utils/data.json";
import DetailedBadge from "@/components/molecules/DetailedBadge";

interface PageProps {
  params: { id: string };
  searchParams?: { id?: string };
}

function getProjectData(id?: string) {
  if (!id) return data[0];
  const decoded = decodeURIComponent(id);
  return data.find((x) => x.id === id || x.name === decoded) || data[0];
}

export function generateMetadata({
  params,
  searchParams,
}: PageProps): Metadata {
  const projectId = searchParams?.id || params?.id;
  const project = getProjectData(projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = "https://evasquez97.vercel.app";
  const title = project.name;
  const description = `${project.intro} ${project.fullDesc}`.slice(0, 160);
  const bannerImg = project.img || "/img/banner1.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/projects/${project.id}`,
      type: "article",
      images: [
        {
          url: bannerImg,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [bannerImg],
    },
  };
}

export default function ProjectInfo({ params, searchParams }: PageProps) {
  const projectId = searchParams?.id || params?.id;
  const project = getProjectData(projectId);
  const { programmingLanguages, dbTech, cloudServices, otherTech, frameworks } =
    tech;
  const allTech = [
    ...programmingLanguages,
    ...dbTech,
    ...cloudServices,
    ...otherTech,
    ...frameworks,
  ];

  function getProjectUrl() {
    if (project?.status !== "live" || !project?.url) return null;
    return (
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View live project"
        title="View live project"
        className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-200/80 dark:border-neutral-700/80 bg-neutral-100/90 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-200 hover:text-highlight hover:border-highlight/40 hover:bg-highlight/10 transition-all shadow-xs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </Link>
    );
  }

  return project ? (
    <div className="w-full pb-8 sm:pb-12">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <h1 className="font-bold capitalize text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-100 tracking-tight">
            {project.name}
          </h1>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/60 capitalize">
            {project.platform}
          </span>
        </div>
        <div>{getProjectUrl()}</div>
      </div>

      {/* Tech stack badges */}
      <div className="w-full mb-5">
        <div className="flex flex-row flex-wrap gap-2">
          {project?.techStack.map((ts) => {
            const techItem = allTech.find((t) => t.name === ts);
            return (
              techItem && (
                <DetailedBadge
                  key={techItem.name}
                  logo={techItem.logo}
                  name={techItem?.name}
                />
              )
            );
          })}
        </div>
      </div>

      {/* Banner image */}
      <div className="relative w-full h-44 sm:h-52 max-h-[200px] sm:max-h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 shadow-sm mb-6 bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={project?.img || "/img/banner1.jpg"}
          alt={project?.name || "Project banner"}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Project Metadata Card */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-5 rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-neutral-100/70 dark:bg-neutral-800/40 mb-6">
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Company
          </span>
          <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5 truncate">
            {project.company}
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Role
          </span>
          <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5 truncate">
            {project.role || "Developer"}
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Timeline
          </span>
          <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5 truncate">
            {project.time}
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Location / Type
          </span>
          <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5 truncate">
            {project.location} ({project.jobType})
          </span>
        </div>
      </div>

      {/* Overview section */}
      <div className="mb-6 space-y-2">
        <Title text="Overview" size="base" styles="font-bold" />
        <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {project?.intro} {project?.fullDesc}
        </p>
      </div>

      {/* Responsibilities section */}
      {project?.responsibilities && project.responsibilities.length > 0 && (
        <div className="mb-6 space-y-3">
          <Title text="Main Responsibilities" size="base" styles="font-bold" />
          <ul className="space-y-2.5">
            {project.responsibilities.map((res, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-800/40 border border-neutral-200/70 dark:border-neutral-800/70 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed"
              >
                <span className="w-2 h-2 rounded-full bg-highlight shrink-0 mt-1.5" />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ) : null;
}
