import { ubuntu } from "@/app/fonts";
import Image from "next/image";

type Skill = {
  name: string;
  experience?: string;
  description?: string;
  logo?: string;
};

export default function Skill({ name, experience, description, logo }: Skill) {
  const variableText = "dark:text-primary-light text-primary-dark";

  return (
    <div className="p-4 min-w-[140px] max-w-sm w-full min-h-[80px] mx-auto bg-secondary-light dark:bg-secondary-dark rounded-sm shadow-sm flex items-center space-x-4 hover:scale-105 duration-300">
      <div className="shrink-0">
        {logo && <Image src={logo} alt={name} width={44} height={44} />}
      </div>
      <div>
        <p
          className={`${ubuntu.className} font-[400] text-highlight text-lg flex flex-row`}
        >
          {name}
          {experience && (
            <p
              className={`${ubuntu.className} ${variableText} opacity-40 font-light ml-2`}
            >
              {experience}
            </p>
          )}
        </p>
        {description && (
          <p className={`${variableText} opacity-90 text-xs`}>{description}</p>
        )}
      </div>
    </div>
  );
}
