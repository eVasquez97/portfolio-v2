import Image from "next/image";
import Link from "next/link";
import { Badge } from "../atoms";
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
  intro,
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
      className="hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div
        className={`${style} ${variableBg} border border-secondaryText-light dark:border-secondaryText-dark rounded md:w-full relative justify-start p-2.5`}
      >
        <div className="flex flex-row items-center">
          <div className="flex rounded-full mr-1.5">
            <Image
              className="border border-secondaryText-light dark:border-secondaryText-dark w-12 h-12 rounded mr-3 object-cover opacity-90 hover:opacity-100"
              src={comapanyLogo || img || "/img/banner1.jpg"}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col w-full ml-2">
            <div className="flex flex-row">
              <p className="mr-1 font-bold text-lg text-highlight">{name}</p>
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
            <span className={`${variableText} text-sm ml-2 font-light`}>
              {intro}
            </span>

            {techStack && (
              <div className="flex flex-row flex-wrap w-full mt-3">
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
        )}
      </div>
    </Link>
  );
}
