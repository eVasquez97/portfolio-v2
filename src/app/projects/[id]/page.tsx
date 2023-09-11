"use client";
import { ubuntu } from "@/app/fonts";
import { Badge, Title } from "@/components/atoms";
import { useSearchParams } from "next/navigation";
import data from "../../../utils/projects.json";
import { Banner } from "@/components/organisms";
import Image from "next/image";
import { variableText } from "@/utils/constants";
import Link from "next/link";

function getProjectData(id: string) {
  return data.find((x) => x.id === id);
}

export default function ProjectInfo() {
  const params = useSearchParams();
  const id = params.get("id");
  const project = getProjectData(id || "1");

  return project ? (
    <div className="w-full h-full">
      <Banner>
        <Image
          src={project?.img || "/img/banner1.jpg"}
          alt={project?.id || "img"}
          width={2000}
          height={2000}
          className="w-full h-[200px] md:h-[256px] object-cover object-top"
        />
      </Banner>

      <div className="flex flex-col md:flex-row w-full items-center justify-between">
        <div className="w-full">
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
          <p className="text-xl text-highlight font-semibold">
            {project?.role}
          </p>
          <p className={`${variableText} text-base`}>
            {project?.company} - {project?.time}
          </p>
          <p
            className={`${variableText} text-base italic capitalize opacity-60`}
          >
            {project?.jobType} - {project?.location}
          </p>
        </div>
        <div className="w-full mt-2 md:mt-0">
          <Title
            text="Tech stack"
            size="xl"
            styles={`${variableText} ${ubuntu.className}`}
          />
          <div className="flex flex-row mb-3">
            {project?.techStack.map((ts) => {
              return (
                <p key={ts} className={`${variableText} text-base m-2`}>
                  {ts}
                </p>
              );
            })}
          </div>
          {project?.status === "live" ? (
            <Link
              href={project?.url}
              target="_blank"
              className="text-primary-light rounded-sm text-center bg-highlight p-2 min-w-[120px] mt-2"
            >
              View project
            </Link>
          ) : (
            <p className={`${variableText} text-base italic opacity-50`}>
              No live preview available.
            </p>
          )}
        </div>
      </div>
      <div className="mt-11 mb-11">
        <p className={`${variableText} text-lg`}>{project?.intro}</p>
      </div>

      <div className="mt-11 mb-11">
        <Title
          text="Main responsibilities"
          size="xl"
          styles={`${variableText} ${ubuntu.className}`}
        />
        <div className="p-5">
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
  ) : null;
}
