"use client";
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
    return (
      project?.status === "live" && (
        <Link href={project?.url} target="_blank" className="text-highlight">
          <div className="p-1 flex flex-row px-2 items-center font-light">
            View
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </div>
        </Link>
      )
    );
  }

  return project ? (
    <div className="w-full h-full">
      <div className="flex flex-row my-4 justify-between items-center">
        <div className="flex flex-row">
          <p
            className={`${variableText} font-semibold mt-2 capitalize text-3xl`}
          >
            {project.name}
          </p>
          <span
            className={`${variableText}  text-sm opacity-60 ml-2 mt-2 capitalize mb-6`}
          >
            {project?.platform}
          </span>
        </div>
        <div className="flex self-center">{getProjectUrl()}</div>
      </div>

      <div className="w-full mb-5 -mt-2">
        <div className="flex flex-row flex-wrap my-2 ">
          {project?.techStack.map((ts) => {
            return (
              <Badge
                key={ts}
                text={ts}
                styles={`${variableText} m-1 first:ml-0`}
              />
            );
          })}
        </div>
      </div>

      <Image
        src={project?.img || "/img/banner1.jpg"}
        alt={project?.id || "img"}
        width={2000}
        height={2000}
        className="w-full h-[180px] object-cover object-center mb-5 opacity-95 hover:opacity-100 rounded"
      />

      <div className="my-8">
        <Title
          text="Description"
          size="base"
          styles="font-normal"
          textColor="text-highlight"
        />
        <p className={`${variableText} my-5 `}>
          {project?.intro} {project?.fullDesc}
        </p>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex w-full items-center my-5">
          <div className="flex-full md:mr-5 mr-2 items-center">
            <Image
              className="border border-secondaryText-light dark:border-secondaryText-dark h-40 w-40 mb-4 md:pb-0 md:w-20 md:h-20 rounded object-cover object-right"
              src={project.companyLogo || "/img/banner1.jpg"}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col -mt-4">
            <p className="text-highlight font-bold mb-1">{project?.role}</p>
            <p className={`${variableText} mb-1`}>
              {project?.company} - {project?.time}
            </p>
            <p
              className={`${variableText} italic capitalize opacity-60 text-sm `}
            >
              {project?.jobType} - {project?.location}
            </p>
          </div>
        </div>

        {/* Second column */}
        <div className="my-5">
          <div className="w-full">
            <Title
              text="Main responsibilities"
              size="base"
              styles="font-normal"
              textColor="text-highlight"
            />
            <div className="p-6">
              {project?.responsibilities.map((res) => {
                return (
                  <p key={res} className={`${variableText} list-item mb-2 `}>
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
