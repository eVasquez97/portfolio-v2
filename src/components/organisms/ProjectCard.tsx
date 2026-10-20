import Image from "next/image";
import Link from "next/link";
import { showIcon } from "@/utils/constants";
import { ProjectProps } from "./orgamismTypes";
import Icon from "../atoms/Icon";
import data from "@/utils/data.json";

export default function ProjectCard({
  name,
  id,
  platform,
  jobType,
  company,
  img,
  techStack,
  style = "",
  companyLogo,
  comapanyLogo,
}: ProjectProps) {
  const { programmingLanguages, dbTech, cloudServices, otherTech, frameworks } =
    data;
  const techs = [
    ...programmingLanguages,
    ...dbTech,
    ...cloudServices,
    ...otherTech,
    ...frameworks,
  ];

  const logoSrc = companyLogo || comapanyLogo || img || "/img/banner1.jpg";

  return (
    <Link
      href={{
        pathname: `/projects/${name}`,
        query: { id: id },
      }}
      className="group block"
    >
      <div
        className={`card-interactive p-3.5 sm:p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-sm hover:shadow ${style}`}
      >
        <div className="flex flex-row items-center justify-between gap-3">
          <div className="flex flex-row items-center space-x-3.5 min-w-0 flex-1">
            <div className="relative w-11 h-11 rounded-lg border border-neutral-200 dark:border-neutral-700/80 overflow-hidden bg-white dark:bg-neutral-800 flex-shrink-0 shadow-sm p-0.5">
              <Image
                src={logoSrc}
                alt={company || name}
                fill
                sizes="44px"
                className="object-cover rounded-md group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-base text-neutral-900 dark:text-neutral-100 group-hover:text-highlight transition-colors truncate">
                  {name}
                </span>
                {platform && (
                  <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-highlight/10 text-highlight border border-highlight/20 flex-shrink-0">
                    {platform}
                  </span>
                )}
              </div>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 capitalize mt-0.5 truncate">
                {company} {jobType ? `· ${jobType}` : ""}
              </p>

              {techStack && techStack.length > 0 && (
                <div className="flex flex-row flex-wrap gap-1.5 mt-2.5">
                  {techStack.map((ts) => {
                    const tech = techs.find(
                      (t) => t.name.toLowerCase() === ts.toLowerCase(),
                    );
                    return (
                      <span
                        key={ts}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60 flex items-center gap-1.5 shadow-2xs"
                      >
                        {tech?.logo && (
                          <Image
                            src={tech.logo}
                            alt={ts}
                            width={13}
                            height={13}
                            className="w-3.5 h-3.5 object-contain flex-shrink-0"
                          />
                        )}
                        <span>{ts}</span>
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 text-neutral-400 group-hover:text-highlight transition-all flex-shrink-0 self-center">
            <Icon icon={showIcon} stroke="currentColor" styles="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
