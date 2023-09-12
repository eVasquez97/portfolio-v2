import { Banner, Quote } from "@/components/organisms";
import data from "../../utils/data.json";
import { ServiceCard, Skill } from "@/components/molecules";
import { Title } from "@/components/atoms";
import Image from "next/image";

export default function Projects() {
  const {
    programmingLanguages,
    dbTech,
    cloudServices,
    otherTech,
    frameworks,
    techStacks,
    services,
  } = data;
  const gridStyle =
    "grid grid-cols-1 md:grid-cols-3 min-w-full mb-10 mt-3 p-1 gap-3";
  const titleStyle = "mb-6 mt-4";

  return (
    <div className="w-full flex flex-col">
      <Banner background="bg-gradient-to-b from-highlight to-transparent mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 min-w-full mb-11 mt-9 p-5 gap-4">
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
      </Banner>
      <Quote quote="If no mistake you have made, yet losing you are…a different game you should play. - Yoda" />

      <div className="bg-primary-light dark:bg-primary-dark mt-16">
        <Title text="Most used Tech stacks" size="xl" styles={titleStyle} />
        <Banner background="bg-secondary-light dark:bg-secondary-dark">
          <div className="mx-auto max-w-[1024px] p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 min-w-full m-2 md:p-1 p-3 gap-2">
              {techStacks.map((ts) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center h-auto mb-11 md:mb-0"
                    key={ts.name}
                  >
                    <div className="w-[90px] h-[90px] justify-center items-center flex object-cover">
                      <Image
                        alt={ts.name}
                        src={ts.logo}
                        width={1000}
                        height={1000}
                        className="w-24 mb-4"
                      />
                    </div>
                    <div className="flex flex-row">
                      <Title text={ts.name} size="xl" styles="mr-2 font-700" />
                      <Title
                        text={ts.experience}
                        size="xl"
                        styles="opacity-40"
                      />
                    </div>
                    <p className="text-sm text-center text-text-light dark:text-text-dark">
                      {ts.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Banner>

        <Title text="Programming languages" size="xl" styles={titleStyle} />
        <div className={gridStyle}>
          {programmingLanguages.map((lang) => {
            return (
              <Skill
                key={lang.name}
                name={lang.name}
                experience={lang.experience}
                logo={lang.logo}
                description={lang.description}
              />
            );
          })}
        </div>

        <Title text="Frameworks" size="xl" styles={titleStyle} />
        <div className={gridStyle}>
          {frameworks.map((fr) => {
            return (
              <Skill
                key={fr.name}
                name={fr.name}
                experience={fr.experience}
                logo={fr.logo}
                description={fr.description}
              />
            );
          })}
        </div>

        <Title text="Databases" size="xl" styles={titleStyle} />
        <div className={gridStyle}>
          {dbTech.map((db) => {
            return (
              <Skill
                key={db.name}
                name={db.name}
                experience={db.experience}
                logo={db.logo}
                description={db.description}
              />
            );
          })}
        </div>

        <Title text="Cloud Services" size="xl" styles={titleStyle} />
        <div className={gridStyle}>
          {cloudServices.map((cloud) => {
            return (
              <Skill
                key={cloud.name}
                name={cloud.name}
                experience={cloud.experience}
                logo={cloud.logo}
                description={cloud.description}
              />
            );
          })}
        </div>

        <Title text="Other skills" size="xl" styles={titleStyle} />
        <div className={gridStyle}>
          {otherTech.map((other) => {
            return (
              <Skill
                key={other.name}
                name={other.name}
                experience={other.experience}
                logo={other.logo}
                description={other.description}
              />
            );
          })}
        </div>

        <Quote quote="Always in motion the future is. - Yoda" />
      </div>
    </div>
  );
}
