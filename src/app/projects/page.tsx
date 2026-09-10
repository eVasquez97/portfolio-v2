"use client";
import { Quote } from "@/components/organisms";
import { showIcon, variableText } from "@/utils/constants";
import Link from "next/link";
import Icon from "@/components/atoms/Icon";
import projects from "../../utils/projects.json";
import dataTech from "../../utils/data.json";
import DetailedBadge from "@/components/molecules/DetailedBadge";
import { PaginatedTable } from "@/components/molecules";

export default function Projects() {
  const { programmingLanguages, dbTech, cloudServices, otherTech, frameworks } =
    dataTech;
  const techs = [
    ...programmingLanguages,
    ...dbTech,
    ...cloudServices,
    ...otherTech,
    ...frameworks,
  ];

  return (
    <div className="flex flex-col w-full">
      <Quote
        quote="In my experience, there’s no such thing as luck. - Obi Wan Kenobi"
        style="mb-5"
      />
      <PaginatedTable
        headers={["Platform", "Description"]}
        data={projects}
        renderRow={(pro) => (
          <tr
            key={pro.id}
            className="px-2 border-t-[1px] border-t-secondaryText-light/30 dark:border-t-secondaryText-dark/30 group hover:bg-secondary-light/40 dark:hover:bg-secondary-dark/40 transition-colors"
          >
            <td className="py-4 text-xs pr-4 opacity-80 align-middle capitalize">
              <span className="px-2 py-1 rounded bg-secondaryText-light/10 dark:bg-secondaryText-dark/10">
                {pro.platform}
              </span>
            </td>
            <td className="px-1 py-4 align-middle">
              <Link
                href={{
                  pathname: `/projects/${pro.name}`,
                  query: { id: pro.id },
                }}
                className="flex flex-row items-center justify-between w-full"
              >
                <div className="flex flex-row items-center space-x-3 w-full">
                  <div className="flex flex-col w-full min-w-0">
                    <p className="font-semibold text-base text-highlight truncate flex items-baseline flex-wrap">
                      <span>{pro.name}</span>
                      <span
                        className={`${variableText} text-xs font-normal opacity-70 capitalize ml-2`}
                      >
                        ({pro.company} {pro.jobType && `- ${pro.jobType}`})
                      </span>
                    </p>
                    {pro.techStack && pro.techStack.length > 0 && (
                      <div className="flex flex-row flex-wrap w-full gap-1 mt-2">
                        {pro.techStack.map((ts) => {
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
                </div>
                <div className="opacity-40 group-hover:opacity-100 transition-opacity pl-4 flex-shrink-0">
                  <Icon
                    icon={showIcon}
                    stroke="currentColor"
                    styles="w-4 h-4"
                  />
                </div>
              </Link>
            </td>
          </tr>
        )}
      />
    </div>
  );
}
