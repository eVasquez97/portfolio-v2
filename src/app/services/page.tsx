import { Quote } from "@/components/organisms";
import data from "../../utils/data.json";
import { ServiceCard, Skill } from "@/components/molecules";
import { Title } from "@/components/atoms";
import { variableText } from "@/utils/constants";
import { EducationType } from "../about/EducationType";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const { techStacks, services, education } = data;
  const gridStyle = "grid grid-cols-1 md:grid-cols-2 min-w-full gap-2 md:gap-3";

  function getEducationInfo(ed: EducationType) {
    return (
      <Link
        key={ed.title}
        href={ed.url}
        className="hover:font-normal"
        target="_blank"
      >
        <div className="flex w-full my-4" key={ed.title}>
          <div className="w-[90] mr-2 bg-transparent rounded">
            <Image src={ed.image} alt={ed.title} width={90} height={90} />
          </div>
          <div className="flex flex-col w-full">
            <div className={`${variableText} text-left flex-wrap`}>
              <p className="font-normal text-highlight">{ed.title}</p>
              <p className="text-sm flex-wrap mb-2">{ed.institute}</p>
              <p className="text-xs opacity-80">{ed.time}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <div className="mb-5">
        <Title
          text="Education"
          styles="font-normal"
          textColor="text-highlight"
        />
        <div className="flex flex-col w-full my-2">
          {education.map((ed) => {
            return getEducationInfo(ed);
          })}
        </div>
      </div>
      <Title
        text="Most used tech stacks"
        styles="my-5 font-normal"
        textColor="text-highlight"
      />
      <div className={`${gridStyle} mb-11`}>
        {techStacks.map((ts) => {
          return (
            <Skill
              key={ts.name}
              name={ts.name}
              experience={ts.experience}
              logo={ts.logo}
              description={ts.description}
            />
          );
        })}
      </div>
      <div>
        <p className={`${variableText} `}>
          Some of the main services I provide are:
        </p>
        <div className="min-w-full my-6">
          {services?.map((sr) => {
            return (
              <ServiceCard
                key={sr.service}
                description={sr.description}
                benefits={sr.benefits}
                service={sr.service}
                logo={sr.logo}
              />
            );
          })}
        </div>
      </div>

      <Quote quote="Always in motion the future is. - Yoda" />
    </div>
  );
}
