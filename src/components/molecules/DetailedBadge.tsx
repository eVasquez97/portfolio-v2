import { DetailedBadgeType } from "@/app/services/DetailedBadgeType";
import { variableBg, variableText } from "@/utils/constants";
import Image from "next/image";

export default function DetailedBadge({
  name,
  experience,
  description,
  logo,
}: DetailedBadgeType) {
  return (
    <div
      className={`${variableBg} m-1 flex items-center px-2 p-1 rounded`}
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
        <p className={`${variableText} text-sm flex flex-row`}>
          {name}
          {experience && (
            <span
              className={`${variableText} opacity-60 font-light ml-2 text-sm`}
            >
              {experience}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
