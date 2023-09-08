"use client";
import { ubuntu } from "@/app/fonts";
import { Badge, Title } from "@/components/atoms";
import { useSearchParams } from "next/navigation";
import data from "../../../utils/projects.json";
import { Banner } from "@/components/organisms";
import Image from "next/image";
import { variableText } from "@/utils/constants";

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
          className="w-full h-[200px] object-cover"
        />
      </Banner>
      <div className="flex flex-row -mt-4">
        <Title
          text={project.name}
          size="3xl"
          styles={`${variableText} ${ubuntu.className} ml-2 mt-2 capitalize text-3xl`}
        />
        <span
          className={`${variableText} text-[10px] opacity-60 ml-2 mt-2 capitalize`}
        >
          {project.platform}
        </span>
      </div>
      <Badge text={project?.status} />
    </div>
  ) : null;
}
