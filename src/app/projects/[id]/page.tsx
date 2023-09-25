"use client";
import { ubuntu } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";
import { Badge, Title } from "@/components/atoms";
import { useSearchParams } from "next/navigation";
import data from "../../../utils/projects.json";
import { variableBg, variableText } from "@/utils/constants";

function getProjectData(id: string) {
  return data.find((x) => x.id === id);
}

export default function ProjectInfo() {
  const params = useSearchParams();
  const id = params.get("id");
  const project = getProjectData(id || "1");

  function getProjectUrl() {
    return project?.status === "live" ? (
      <Link
        href={project?.url}
        target="_blank"
        className="rounded-sm mt-2 text-highlight"
      >
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
          View project
        </div>
      </Link>
    ) : (
      <p className={`${variableText} opacity-50 flex flex-row flex-wrap`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        No live preview available.
      </p>
    );
  }

  return project ? (
    <div className="w-full h-full">
      <Image
        src={project?.img || "/img/banner1.jpg"}
        alt={project?.id || "img"}
        width={2000}
        height={2000}
        className="w-full h-[200px] object-cover rounded-md mb-5"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 items-start justify-center">
        <div className="flex flex-col w-full items-center justify-between mt-5 md:mt-0">
          <div
            className={`${variableBg} border border-secondaryText-light dark:border-secondaryText-dark w-full p-6 rounded -mt-6 md:-mt-0`}
          >
            <div className="flex flex-row -mt-4">
              <Title
                text={project?.name}
                size="2xl"
                styles={`${variableText} ${ubuntu.className} mt-2 capitalize text-2xl`}
              />
              <span
                className={`${variableText} text-sm opacity-60 ml-2 mt-2 capitalize mb-6`}
              >
                {project?.platform}
              </span>
            </div>
            <p className="text-highlight font-semibold mb-1">{project?.role}</p>
            <p className={`${variableText} mb-1`}>
              {project?.company} - {project?.time}
            </p>
            <p
              className={`${variableText} italic capitalize opacity-60 mb-6 text-sm`}
            >
              {project?.jobType} - {project?.location}
            </p>

            {getProjectUrl()}
          </div>

          <div className="w-full mt-5">
            <Title
              text="Tech stack"
              size="base"
              styles={`${variableText} ${ubuntu.className}`}
            />
            <div className="flex flex-row flex-wrap mb-5">
              {project?.techStack.map((ts) => {
                return (
                  <Badge
                    key={ts}
                    text={ts}
                    styles={`${variableText} m-2 min-w-[90px]`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="md:mt-3">
          <div className="md:p-2">
            <Title
              text="Description"
              size="base"
              styles={`${variableText} ${ubuntu.className}`}
            />
            <p className={`${variableText} mt-4`}>{project?.intro}</p>
          </div>

          <div className="md:p-2 mt-5 md:mt-0">
            <Title
              text="Main responsibilities"
              size="base"
              styles={`${variableText} ${ubuntu.className}`}
            />
            <div className="p-6">
              {project?.responsibilities.map((res) => {
                return (
                  <p key={res} className={`${variableText} list-item mb-2`}>
                    {res}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
