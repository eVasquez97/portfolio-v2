"use client";
import { ubuntu } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";
import { Badge, Title } from "@/components/atoms";
import { useSearchParams } from "next/navigation";
import data from "../../../utils/projects.json";
import { variableText } from "@/utils/constants";

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
        className="rounded-sm mt-2 text-lg text-highlight"
      >
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z"
              clipRule="evenodd"
            />
          </svg>
          View project
        </div>
      </Link>
    ) : (
      <p
        className={`${variableText} text-base opacity-50 flex flex-row flex-wrap`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            fillRule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
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
        className="w-full h-[200px] md:h-[256px] object-cover rounded-md mb-5"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 items-start justify-center">
        <div className="flex flex-col w-full items-center justify-between md:p-2 p-3">
          <div className="w-full bg-secondary-light dark:bg-secondary-dark p-6 rounded-md shadow-sm -mt-6 md:-mt-0">
            <div className="flex flex-row -mt-4">
              <Title
                text={project?.name}
                size="3xl"
                styles={`${variableText} ${ubuntu.className} mt-2 capitalize text-3xl`}
              />
              <span
                className={`${variableText} text-sm opacity-60 ml-2 mt-2 capitalize mb-6`}
              >
                {project?.platform}
              </span>
            </div>
            <p className="text-xl text-highlight font-semibold mb-1">
              {project?.role}
            </p>
            <p className={`${variableText} text-base mb-1`}>
              {project?.company} - {project?.time}
            </p>
            <p
              className={`${variableText} text-base italic capitalize opacity-60 mb-6`}
            >
              {project?.jobType} - {project?.location}
            </p>

            {getProjectUrl()}
          </div>

          <div className="w-full mt-5">
            <Title
              text="Tech stack"
              size="xl"
              styles={`${variableText} ${ubuntu.className}`}
            />
            <div className="flex flex-row flex-wrap">
              {project?.techStack.map((ts) => {
                return (
                  <Badge
                    key={ts}
                    text={ts}
                    styles={`${variableText} text-base m-5 md:m-3 min-w-[90px]`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="md:mt-3">
          <div className="md:p-2 p-3">
            <Title
              text="Description"
              size="xl"
              styles={`${variableText} ${ubuntu.className}`}
            />
            <p className={`${variableText} text-base mt-4`}>{project?.intro}</p>
          </div>

          <div className="md:p-2 p-3 md:mt-5">
            <Title
              text="Main responsibilities"
              size="xl"
              styles={`${variableText} ${ubuntu.className}`}
            />
            <div className="p-6">
              {project?.responsibilities.map((res) => {
                return (
                  <p
                    key={res}
                    className={`${variableText} text-base list-item mb-3`}
                  >
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
