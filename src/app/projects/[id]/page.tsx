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
        aria-label={`Visit live project ${project.name} (opens in new tab)`}
        title="View live project"
        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200/80 bg-neutral-100/90 text-neutral-700 shadow-xs transition-all hover:border-highlight/40 hover:bg-highlight/10 hover:text-highlight active:scale-95 dark:border-neutral-700/80 dark:bg-neutral-800/90 dark:text-neutral-200 sm:h-10 sm:w-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
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
    <article className="animate-fade-in w-full pb-8 sm:pb-12">
      {/* Header section */}
      <header className="my-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-2.5">
          <h1 className="text-2xl font-bold capitalize tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
            {project.name}
          </h1>
          <span className="rounded-full border border-neutral-200/80 bg-neutral-100 px-3 py-1 text-xs font-medium capitalize text-neutral-700 dark:border-neutral-700/60 dark:bg-neutral-800/90 dark:text-neutral-300">
            {project.platform}
          </span>
        </div>
        <div>{getProjectUrl()}</div>
      </header>

      {/* Tech stack badges */}
      <div className="mb-5 w-full" aria-label="Technologies used">
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
      <div className="animate-scale-in stagger-1 relative mb-6 h-44 max-h-[200px] w-full overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:h-52 sm:max-h-[220px] sm:rounded-3xl">
        <Image
          src={project?.img || "/img/banner1.jpg"}
          alt={`${project?.name || "Project"} preview banner`}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Project Metadata Card */}
      <dl className="animate-fade-in stagger-2 mb-6 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200/70 bg-neutral-100/70 p-4 dark:border-neutral-800/70 dark:bg-neutral-800/40 sm:grid-cols-4 sm:p-5">
        <div className="flex min-w-0 flex-col">
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Company
          </dt>
          <dd className="mt-0.5 truncate text-xs font-semibold text-neutral-900 dark:text-neutral-100 sm:text-sm">
            {project.company}
          </dd>
        </div>
        <div className="flex min-w-0 flex-col">
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Role
          </dt>
          <dd className="mt-0.5 truncate text-xs font-semibold text-neutral-900 dark:text-neutral-100 sm:text-sm">
            {project.role || "Developer"}
          </dd>
        </div>
        <div className="flex min-w-0 flex-col">
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Timeline
          </dt>
          <dd className="mt-0.5 truncate text-xs font-semibold text-neutral-900 dark:text-neutral-100 sm:text-sm">
            {project.time}
          </dd>
        </div>
        <div className="flex min-w-0 flex-col">
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            Location / Type
          </dt>
          <dd className="mt-0.5 truncate text-xs font-semibold text-neutral-900 dark:text-neutral-100 sm:text-sm">
            {project.location} ({project.jobType})
          </dd>
        </div>
      </dl>

      {/* Overview section */}
      <section className="animate-fade-in stagger-2 mb-6 space-y-2">
        <Title text="Overview" size="base" styles="font-bold" />
        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
          {project?.intro} {project?.fullDesc}
        </p>
      </section>

      {/* Responsibilities section */}
      {project?.responsibilities && project.responsibilities.length > 0 && (
        <section className="animate-fade-in stagger-3 mb-6 space-y-3">
          <Title text="Main Responsibilities" size="base" styles="font-bold" />
          <ul className="space-y-2.5">
            {project.responsibilities.map((res, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-neutral-200/70 bg-neutral-100/70 p-3.5 text-sm leading-relaxed text-neutral-800 dark:border-neutral-800/70 dark:bg-neutral-800/40 dark:text-neutral-200 sm:p-4 sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-highlight"
                />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  ) : null;
}
