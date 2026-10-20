import { DetailedBadgeType } from "@/app/services/DetailedBadgeType";
import Image from "next/image";

export default function DetailedBadge({
  name,
  experience,
  description,
  logo,
}: DetailedBadgeType) {
  return (
    <div className="badge-detailed" title={description}>
      <Image
        src={logo}
        alt={name}
        width={24}
        height={24}
        className="mr-2 h-4 w-4"
      />
      <p className="text-xs flex flex-row">
        {name}
        {experience && (
          <span className="opacity-60 ml-2 text-sm">{experience}</span>
        )}
      </p>
    </div>
  );
}
