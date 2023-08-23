import Image from "next/image";
import Link from "next/link";
import { Badge, Title } from "../atoms";
import { variableText } from "@/utils/constants";

export type ProjectProps = {
  id: string;
  name: string;
  platform?: string;
  intro: string;
  techStack: string[];
  jobType: string;
  company: string;
  img: string;
};

export default function ProjectCard({
  name,
  id,
  platform,
  intro,
  techStack,
  jobType,
  company,
  img,
}: ProjectProps) {
  return (
    <Link
      href={{
        pathname: `/projects/${name}`,
        query: { id: id },
      }}
    >
      <div className="flex flex-col bg-secondary-light dark:bg-secondary-dark shadow-sm md:max-w-xl md:flex-row min-h-[220px] h-full">
        <Image
          className="h-96 w-full md:max-w-[32%] object-cover md:h-auto"
          src={img || "/img/banner1.jpg"}
          alt=""
          width={100}
          height={96}
        />
        <div className="flex flex-col justify-start p-6 min-w-[50%]">
          <p className="flex flex-row">
            <Title text={name} size="xl" styles="mb-3" />
            <span
              className={`${variableText} text-[10px] opacity-60 ml-2 mt-2 capitalize`}
            >
              {platform}
            </span>
          </p>
          <p
            className={`${variableText} text-xs opacity-80 capitalize mb-2 -mt-2`}
          >
            {jobType} - {company}
          </p>
          <p className={`${variableText} mb-4 text-sm`}>{intro}</p>
          <div className="flex flex-row flex-wrap">
            {techStack.map((ts) => {
              return <Badge key={ts} text={ts} styles="m-1" />;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
