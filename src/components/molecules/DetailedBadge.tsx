import { ubuntu } from "@/app/fonts";
import { variableText } from "@/utils/constants";
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
      className="min-w-[144px] m-3 flex items-center space-x-4 hover:scale-105 duration-300"
      title={description}
    >
      <div>
        <Image src={logo} alt={name} width={24} height={24} />
      </div>
      <div>
        <p
          className={`${ubuntu.className} font-[400] text-highlight flex flex-row`}
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
