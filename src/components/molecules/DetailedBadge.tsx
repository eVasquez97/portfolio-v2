import { ubuntu } from "@/app/fonts";
import { variableBg, variableText } from "@/utils/constants";
import Image from "next/image";

type BadgeDetail = {
  name: string;
  experience: string;
  description?: string;
  logo: string;
};

export default function DetailedBadge({
  name,
  experience,
  description,
  logo,
}: BadgeDetail) {
  return (
    <div
      className={`${variableBg} m-2 flex items-center px-2 p-1 hover:scale-105 duration-300 rounded
      border border-secondaryText-light dark:border-secondaryText-dark`}
      title={description}
    >
      <div>
        <Image
          src={logo}
          alt={name}
          width={24}
          height={24}
          className="mr-2 h-5 w-5"
        />
      </div>
      <div>
        <p
          className={`${ubuntu.className} text-sm font-[400] text-highlight flex flex-row`}
        >
          {name}
          <span
            className={`${ubuntu.className} ${variableText} opacity-60 font-light ml-2`}
          >
            {experience}
          </span>
        </p>
      </div>
    </div>
  );
}
