"use client";
import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components/atoms";
import { useSearchParams } from "next/navigation";
import data from "../../../utils/projects.json";
import tech from "../../../utils/data.json";
import { variableText } from "@/utils/constants";
import DetailedBadge from "@/components/molecules/DetailedBadge";
import { Quote } from "@/components/organisms";

function getProjectData(id: string) {
  return data.find((x) => x.id === id);
}

export default function ProjectInfo() {
  const params = useSearchParams();
  const id = params.get("id");
  const project = getProjectData(id || "1");
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

      <div className="w-full mb-5 -mt-4">
        <div className="flex flex-row flex-wrap my-2 ">
          {project?.techStack.map((ts) => {
            const tech = allTech.find((t) => t.name === ts);
            return (
              tech && (
                <DetailedBadge
                  key={tech.name}
                  logo={tech.logo}
                  name={tech?.name}
                />
              )
            );
          })}
        </div>
      </div>

      <Image
        src={project?.img || "/img/banner1.jpg"}
        alt={project?.id || "img"}
        width={2000}
        height={2000}
        className="w-full h-[120px] object-cover object-center mb-5 opacity-95 hover:opacity-100"
      />

      <div className="my-4">
        <Title text="Description" size="base" styles="font-bold" />
        <p className={`${variableText} my-4 `}>
          {project?.intro} {project?.fullDesc}
        </p>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex w-full items-center my-5">
          <Quote
            quote={`${project?.company} - ${project?.time}\n${project?.location} (${project?.jobType})`}
          />
        </div>

        {/* Second column */}
        <div className="my-5">
          <div className="w-full">
            <Title
              text="Main responsibilities"
              size="base"
              styles="font-bold"
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
