import Image from "next/image";
import Link from "next/link";
import { showIcon, variableBg, variableText } from "@/utils/constants";
import { ProjectProps } from "./orgamismTypes";
import Icon from "../atoms/Icon";
import data from "@/utils/data.json";
import DetailedBadge from "../molecules/DetailedBadge";

export default function ProjectCard({
  name,
  id,
  platform,
  jobType,
  company,
  img,
  techStack,
  style,
  comapanyLogo,
}: ProjectProps) {
  const detailText = "capitalize";
  const { programmingLanguages, dbTech, cloudServices, otherTech, frameworks } =
    data;
  const techs = [
    ...programmingLanguages,
    ...dbTech,
    ...cloudServices,
    ...otherTech,
    ...frameworks,
  ];

  return (
    <Link
      href={{
        pathname: `/projects/${name}`,
        query: { id: id },
      }}
      className="group block"
    >
      <div
        className={`${style} ${variableBg} border border-secondaryText-light/30 dark:border-secondaryText-dark/30 rounded-lg md:w-full relative p-3 transition-colors hover:border-highlight/50`}
      >
        <div className="flex flex-row items-center">
          <Image
            className="border border-secondaryText-light/30 dark:border-secondaryText-dark/30 w-12 h-12 rounded-md mr-3 object-cover opacity-90 group-hover:opacity-100 flex-shrink-0"
            src={comapanyLogo || img || "/img/banner1.jpg"}
            alt=""
            width={100}
            height={100}
          />
          <div className="flex flex-col w-full min-w-0 mr-6">
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-base text-highlight truncate">
                {name}
              </p>
              <span
                className={`${variableText} capitalize text-[10px] opacity-50 px-1.5 py-0.5 rounded bg-secondaryText-light/10 dark:bg-secondaryText-dark/10`}
              >
                {platform}
              </span>
            </div>
            <span
              className={`${variableText} ${detailText} text-xs opacity-60 truncate mt-0.5`}
            >
              {company} {jobType && `- ${jobType}`}
            </span>

            {techStack && techStack.length > 0 && (
              <div className="flex flex-row flex-wrap w-full gap-1 mt-2">
                {techStack.map((ts) => {
                  const tech = techs.find((t) => t.name === ts);
                  return (
                    tech && (
                      <DetailedBadge
                        key={tech.name}
                        logo={tech.logo}
                        name={tech.name}
                      />
                    )
                  );
                })}
              </div>
            )}
          </div>
          <div
            className={`${variableText} absolute right-3 top-3 opacity-40 group-hover:opacity-100 transition-opacity`}
          >
            <Icon icon={showIcon} stroke="currentColor" styles="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
