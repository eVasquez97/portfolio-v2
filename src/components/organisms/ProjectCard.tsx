import Image from "next/image";
import Link from "next/link";
import { Badge, Title } from "../atoms";
import { variableText } from "@/utils/constants";

export type ProjectProps = {
  id: string;
  name: string;
  platform?: string;
  jobType: string;
  company: string;
  img: string;
};

export default function ProjectCard({
  name,
  id,
  platform,
  jobType,
  company,
  img,
}: ProjectProps) {
  const col = "flex flex-col";
  const detailText = "capitalize opacity-60";

  return (
    <Link
      href={{
        pathname: `/projects/${name}`,
        query: { id: id },
      }}
    >
      <div
        className={`${col} bg-secondary-light dark:bg-secondary-dark shadow-sm md:max-w-xl min-h-[164px] h-full rounded-md relative justify-center hover:scale-105`}
      >
        <Image
          className="w-full object-cover h-[164px] rounded-md"
          src={img || "/img/banner1.jpg"}
          alt=""
          width={1000}
          height={1000}
        />
        <div
          className={`${col} self-center text-center p-2 absolute bg-primary-light dark:bg-primary-dark w-4/5 mx-auto rounded-md shadow-sm`}
        >
          <div className="flex flex-row justify-center ">
            <Title text={name} size="2xl" styles="mb-3 text-center" />
            <span
              className={`${variableText} ${detailText} text-[10px] ml-2 mt-2`}
            >
              {platform}
            </span>
          </div>
          <p className={`${variableText} ${detailText} text-xs mb-4 -mt-2`}>
            {jobType} - {company}
          </p>
        </div>
      </div>
    </Link>
  );
}
