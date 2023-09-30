import Image from "next/image";
import Link from "next/link";
import { Badge, Title } from "../atoms";
import { variableBg, variableText } from "@/utils/constants";
import { ProjectProps } from "./orgamismTypes";

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
        className={`${style} ${variableBg} border border-secondaryText-light dark:border-secondaryText-dark rounded md:w-full relative justify-start p-3`}
      >
        <div className="flex flex-row items-center">
          <div className="flex rounded-full">
            <Image
              className="border border-secondaryText-light dark:border-secondaryText-dark w-12 h-12 rounded-full mr-2 object-cover"
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
                size="base"
                styles="mr-1 text-base font-semibold"
              />
              <p className={`${variableText} capitalize text-xs opacity-60`}>
                {platform}
              </p>
            </div>
            <div className="flex flex-row ">
              <p className={`${variableText} ${detailText} text-sm opacity-80`}>
                {company} - {jobType}
              </p>
            </div>
          </div>
          <div
            className={`${variableText} z-[1] float-right absolute block right-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 ml-2 opacity-60"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </div>
        </div>

        {intro && (
          <div className="mt-3">
            <p className={`${variableText} text-sm ml-2 my-5 opacity-80 `}>
              {intro}
            </p>

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
        )}
      </div>
    </Link>
  );
}
