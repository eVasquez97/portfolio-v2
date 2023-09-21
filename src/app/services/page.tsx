import { Banner, Quote } from "@/components/organisms";
import data from "../../utils/data.json";
import { ServiceCard, Skill } from "@/components/molecules";
import { Title } from "@/components/atoms";
import DetailedBadge from "@/components/molecules/DetailedBadge";
import { variableBg } from "@/utils/constants";

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
  const gridStyle = "grid grid-cols-1 md:grid-cols-3 min-w-full gap-5";
  const internalSection = "flex flex-col w-full";
  const titleStyle = "mb-6 mt-4";

  type Skill = {
    name: string;
    experience: string;
    logo: string;
    description: string;
  };

  function itemsSection(items: any[], title: string) {
    return (
      <div className={`${variableBg} w-full p-4 h-full`}>
        <Title text={title} size="base" styles="mb-4" />
        <div className={internalSection}>
          {items.map((item: Skill) => {
            return (
              <DetailedBadge
                key={item.name}
                name={item.name}
                experience={item.experience}
                logo={item.logo}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <Banner background="transparent">
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
        <div className={`${gridStyle} mb-14`}>
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

        <Title text="Technical expertise" size="xl" styles={titleStyle} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 min-w-full mb-11">
          {itemsSection(programmingLanguages, "Programming languages")}
          {itemsSection(frameworks, "Frameworks")}
          {itemsSection(dbTech, "Databases")}
          {itemsSection(cloudServices, "Cloud services")}
          {itemsSection(otherTech, "Other skills")}
        </div>

        <Quote quote="Always in motion the future is. - Yoda" />
      </div>
    </div>
  );
}
