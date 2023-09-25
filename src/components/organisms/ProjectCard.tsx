import Image from "next/image";
import Link from "next/link";
import { Badge, Title } from "../atoms";
import { variableBg, variableText } from "@/utils/constants";

export type ProjectProps = {
  id: string;
  name: string;
  platform?: string;
  jobType: string;
  company: string;
  img: string;
  techStack?: string[];
  intro?: string;
  style?: string;
  comapanyLogo?: string;
};

export default function ProjectCard({
  name,
  id,
  platform,
  jobType,
  company,
  img,
  techStack,
  intro,
  style,
  comapanyLogo,
}: ProjectProps) {
  const detailText = "capitalize";

  return (
    <Link
      href={{
        pathname: `/projects/${name}`,
        query: { id: id },
      }}
    >
      <div
        className={`${style} ${variableBg} border border-secondaryText-light dark:border-secondaryText-dark rounded md:w-full relative justify-start p-3 hover:scale-105 ease-in-out transition duration-300`}
      >
        <div className="flex flex-row items-center">
          <div className="flex rounded-full">
            <Image
              className="border border-secondaryText-light dark:border-secondaryText-dark w-12 h-12 rounded-full mr-3 object-cover object-right"
              src={comapanyLogo || img || "/img/banner1.jpg"}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col w-full ml-2">
            <div className="flex flex-row">
              <Title
                text={name}
                size="xl"
                styles="mr-2 text-base font-medium"
                textColor="text-highlight"
              />
              <p className={`${variableText} capitalize text-xs opacity-80`}>
                {platform}
              </p>
            </div>
            <div className="flex flex-row ">
              <p className={`${variableText} ${detailText} text-sm opacity-80`}>
                {company} - {jobType}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3">
          {intro && (
            <p className={`${variableText} text-sm my-5 opacity-80 `}>
              {intro}
            </p>
          )}
          {techStack && (
            <div className="flex flex-row flex-wrap w-full mt-4">
              {techStack.map((ts) => {
                return (
                  <Badge
                    key={ts}
                    text={ts}
                    styles="border border-secondaryText-light dark:border-secondaryText-dark m-1"
                    background="transparent"
                    textColor={variableText}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
