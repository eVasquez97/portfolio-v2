import Image from "next/image";

type Skill = {
  name: string;
  experience?: string;
  description?: string;
  logo?: string;
};

export default function Skill({ name, experience, description, logo }: Skill) {
  return (
    <div className="p-4 min-w-[140px] max-w-sm w-full min-h-[80px] mx-auto bg-secondary-light dark:bg-secondary-dark rounded-sm shadow-sm flex items-center space-x-4 hover:scale-105 duration-300">
      <div className="shrink-0">
        {logo && <Image src={logo} alt={name} width={44} height={44} />}
      </div>
      <div>
        <div className="flex flex-row">
          <p className=" text-highlight">{name}</p>
          {experience && (
            <p className="opacity-40 dark:text-primary-light text-primary-dark font-light ml-2">
              {experience}
            </p>
          )}
        </div>
        {description && (
          <p className="text-primary-dark dark:text-primary-light text-xs">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
