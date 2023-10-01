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
        className={`${style} ${variableText} md:w-full h-full relative justify-start p-2`}
      >
        <div className="flex flex-col">
          <div className="flex flex-row text-left mb-1">
            <Title
              text={name}
              size="base"
              styles="text-base font-semibold mr-1"
            />
            <p className={`capitalize text-xs opacity-60`}>{platform}</p>
          </div>
          <div className="flex flex-col mb-1">
            <Image
              className={`w-full h-44 object-cover opacity-95 hover:opacity-100`}
              src={img || "/img/banner1.jpg"}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-col ">
              <p className={`${detailText} text-sm font-semibold`}>{company}</p>
              <p className={`${detailText} text-xs opacity-80`}>{jobType}</p>
            </div>
            <div className={`z-[1] float-right absolute block right-2`}>
              <Icon
                icon={showIcon}
                stroke="currentColor"
                styles="w-5 h-5 opacity-60"
              />
            </div>
          </div>
        </div>

        {intro && (
          <div className="mt-3">
            <p className={`${variableText} text-sm my-2 opacity-80 `}>
              {intro}
            </p>

            {techStack && (
              <div className="flex flex-row flex-wrap w-full mt-4">
                {techStack.map((ts) => {
                  return (
                    <Badge
                      key={ts}
                      text={ts}
                      styles="m-1 first:ml-0"
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
