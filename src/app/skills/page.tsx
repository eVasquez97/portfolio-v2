import { Title } from "@/components/atoms";
import { Skill } from "@/components/molecules";
import data from "../../utils/data.json";
import { Banner, Quote } from "@/components/organisms";
import Image from "next/image";

export default function Skills() {
  const {
    programmingLanguages,
    dbTech,
    cloudServices,
    otherTech,
    frameworks,
    techStacks,
  } = data;
  const gridStyle =
    "grid grid-cols-1 md:grid-cols-3 min-w-full mb-10 mt-3 p-1 gap-3";
  const titleStyle = "mb-6 mt-4";

  return (
    <div className="bg-primary-light dark:bg-primary-dark">
      <Title text="Most used Tech stacks" size="2xl" styles={titleStyle} />
      <Banner background="bg-secondary-light dark:bg-secondary-dark">
        <div className="mx-auto max-w-[1024px] p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 min-w-full m-3 p-1 gap-2">
            {techStacks.map((ts) => {
              return (
                <div
                  className="flex flex-col items-center justify-center"
                  key={ts.name}
                >
                  <div className="w-[90px] h-[90px] justify-center items-center flex object-cover">
                    <Image alt={ts.name} src={ts.logo} width={80} height={80} />
                  </div>
                  <div className="flex flex-row">
                    <Title text={ts.name} size="xl" styles="mr-2 font-700" />
                    <Title text={ts.experience} size="xl" styles="opacity-50" />
                  </div>
                  <p className="text-xs text-center text-text-light dark:text-text-dark">
                    {ts.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Banner>

      <Title text="Programming languages" size="2xl" styles={titleStyle} />
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

      <Title text="Frameworks" size="2xl" styles={titleStyle} />
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

      <Title text="Databases" size="2xl" styles={titleStyle} />
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

      <Title text="Cloud Services" size="2xl" styles={titleStyle} />
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

      <Title text="Other skills" size="2xl" styles={titleStyle} />
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
  );
}
