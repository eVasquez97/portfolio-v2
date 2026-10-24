import Image from "next/image";

export type DetailedBadgeType = {
  name: string;
  experience?: string;
  logo: string;
  description?: string;
};

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
      <span className="flex flex-row items-center text-xs">
        {name}
        {experience && (
          <span className="ml-2 text-xs text-neutral-600 dark:text-neutral-400">
            {experience}
          </span>
        )}
      </span>
    </div>
  );
}
