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
        className={`${style} ${variableBg} border border-secondaryText-light dark:border-secondaryText-dark rounded md:w-full min-h-[120px] relative justify-start p-3 hover:scale-105 ease-in-out transition duration-300`}
      >
        <div className="flex flex-row items-center">
          <div className="flex rounded-full">
            <Image
              className="border border-secondaryText-light dark:border-secondaryText-dark w-8 h-8 rounded-full mr-3 object-cover object-right"
              src={comapanyLogo || img || "/img/banner1.jpg"}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-row">
            <Title
              text={name}
              size="xl"
              styles="mr-2"
              textColor="text-highlight"
            />
            <p className={`${variableText} capitalize text-xs`}>{platform}</p>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-row ">
            <p className={`${variableText} ${detailText} text-sm`}>
              {company} - {jobType}
            </p>
          </div>
          {intro && <p className={`${variableText} mt-3`}>{intro}</p>}
          {techStack && (
            <div className="flex flex-row flex-wrap w-full mt-5">
              {techStack.map((ts) => {
                return (
                  <Badge
                    key={ts}
                    text={ts}
                    styles="border border-secondaryText-light dark:border-secondaryText-dark m-1"
                    background={intro ? `bg-highlight` : `transparent`}
                    textColor={intro ? `text-primary-light` : `${variableText}`}
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
