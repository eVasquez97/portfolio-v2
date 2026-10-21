import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "./orgamismTypes";
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
      className="group block h-full"
    >
      <article
        className={`card-interactive flex h-full flex-col justify-between p-4 ${style}`}
      >
        <div className="flex flex-row items-start justify-between gap-3">
          <div className="flex min-w-0 flex-1 flex-row items-start space-x-3.5">
            <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-0.5 dark:border-neutral-700/80 dark:bg-neutral-800">
              <Image
                src={logoSrc}
                alt={company || name}
                fill
                sizes="44px"
                className="rounded-xl object-cover transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex flex-wrap items-center gap-1.5">
                <h3 className="truncate text-base font-semibold text-neutral-900 transition-colors group-hover:text-highlight dark:text-neutral-100">
                  {name}
                </h3>
                {platform && (
                  <span className="flex-shrink-0 rounded-full border border-highlight/20 bg-highlight/15 px-1.5 py-[1px] text-[9px] font-semibold uppercase leading-tight tracking-wider text-highlight">
                    {platform}
                  </span>
                )}
              </div>

              <p className="mt-0.5 truncate text-xs capitalize text-neutral-600 dark:text-neutral-400">
                {company} {jobType ? `· ${jobType}` : ""}
              </p>

              {techStack && techStack.length > 0 && (
                <div className="mt-3 flex flex-row flex-wrap gap-1.5">
                  {techStack.map((ts) => {
                    const tech = techs.find(
                      (t) => t.name.toLowerCase() === ts.toLowerCase(),
                    );
                    return (
                      <span
                        key={ts}
                        className="flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-neutral-100/80 px-2.5 py-0.5 text-[11px] font-medium text-neutral-800 dark:border-neutral-800/80 dark:bg-neutral-800/50 dark:text-neutral-200"
                      >
                        {tech?.logo && (
                          <Image
                            src={tech.logo}
                            alt={ts}
                            width={13}
                            height={13}
                            className="h-3.5 w-3.5 flex-shrink-0 object-contain"
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
        </div>
      </article>
    </Link>
  );
}
