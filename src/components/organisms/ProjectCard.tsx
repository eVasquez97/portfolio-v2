import Image from "next/image";
import Link from "next/link";
import { Badge, Title } from "../atoms";
import { showIcon, variableBg, variableText } from "@/utils/constants";
import { ProjectProps } from "./orgamismTypes";
import Icon from "../atoms/Icon";

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
        className={`${style} ${variableBg} border border-secondaryText-light dark:border-secondaryText-dark rounded md:w-full relative justify-start p-2.5`}
      >
        <div className="flex flex-row items-center">
          <div className="flex rounded-full mr-1.5">
            <Image
              className="border border-secondaryText-light dark:border-secondaryText-dark w-12 h-12 rounded-full mr-3 object-cover"
              src={comapanyLogo || img || "/img/banner1.jpg"}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col w-full ml-2">
            <div className="flex flex-row">
              <Title text={name} styles="mr-1" />
              <span
                className={`${variableText} capitalize text-[10px] opacity-60`}
              >
                {platform}
              </span>
            </div>
            <div className="flex flex-row ">
              <span
                className={`${variableText} ${detailText} text-xs opacity-60`}
              >
                {company} - {jobType}
              </span>
            </div>
          </div>
          <div
            className={`${variableText} z-[1] float-right absolute block right-2`}
          >
            <Icon
              icon={showIcon}
              stroke="currentColor"
              styles="w-5 h-5 ml-2 opacity-60"
            />
          </div>
        </div>

        {intro && (
          <div className="mt-5">
            <span className={`${variableText} text-sm ml-2`}>{intro}</span>

            {techStack && (
              <div className="flex flex-row flex-wrap w-full mt-3">
                {techStack.map((ts) => {
                  return (
                    <Badge
                      key={ts}
                      text={ts}
                      styles="border border-secondaryText-light dark:border-secondaryText-dark m-1"
                      background="bg-highlight"
                      textColor="text-primary-light"
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
