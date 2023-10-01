import { variableBg } from "@/utils/constants";
import Image from "next/image";
import { SkillType } from "./moleculeTypes";

export default function Skill({
  name,
  experience,
  description,
  logo,
}: SkillType) {
  const variableText = "dark:text-primary-light text-primary-dark";

  return (
    <div
      className={`${variableBg} border border-secondaryText-light dark:border-secondaryText-dark p-4 min-w-[140px] max-w-sm w-full min-h-[80px] mx-auto flex items-center space-x-4 rounded`}
    >
      <div className="shrink-0">
        {logo && <Image src={logo} alt={name} width={44} height={44} />}
      </div>
      <div>
        <p className={` ${variableText} text-base font-normal flex flex-row`}>
          {name}
          {experience && (
            <span className={`${variableText} font-normal opacity-60 ml-2`}>
              {experience}
            </span>
          )}
        </p>
        {description && (
          <p className={`${variableText} opacity-60 text-xs`}>{description}</p>
        )}
      </div>
    </div>
  );
}
