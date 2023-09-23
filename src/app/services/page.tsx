import { Banner, Quote } from "@/components/organisms";
import data from "../../utils/data.json";
import { ServiceCard, Skill } from "@/components/molecules";
import { Title } from "@/components/atoms";
import DetailedBadge from "@/components/molecules/DetailedBadge";
import { variableBg, variableBorder, variableText } from "@/utils/constants";

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
  const gridStyle = "grid grid-cols-1 md:grid-cols-2 min-w-full gap-5";
  const internalSection = "flex flex-col w-full";
  const titleStyle = "mb-6 mt-4";
  const statTitle = "display-5 mb-4 text-4xl font-bold text-highlight";
  const statDetail = `${variableText} mb-4 font-medium`;
  const statContainer = "mb-12 md:mb-0";

  type Skill = {
    name: string;
    experience: string;
    logo: string;
    description: string;
  };

  function itemsSection(items: any[], title: string) {
    return (
      <div
        className={`${variableBg} ${variableBorder} rounded w-full p-4 h-full`}
      >
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
        <section
          className={` ${variableBorder} ${variableBg} rounded mb-11 text-center p-10`}
        >
          <div className="grid gap-x-6 md:grid-cols-3">
            <div className={statContainer}>
              <h2 className={statTitle}>5 +</h2>
              <h5 className={statDetail}>years of experience</h5>
            </div>

            <div className={statContainer}>
              <h2 className={statTitle}>95% +</h2>
              <h5 className={statDetail}>US Clients</h5>
            </div>

            <div className={statContainer}>
              <h2 className={statTitle}>10 +</h2>
              <h5 className={statDetail}>Live Projects</h5>
            </div>
          </div>
        </section>

        <p className={`${variableText}`}>
          Some of the main services I provide are:
        </p>
        <div className="min-w-full mb-11 mt-5">
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
        <Title text="Most used Tech stacks" size="base" styles={titleStyle} />
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

        <Title text="Technical expertise" size="base" styles={titleStyle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-w-full mb-11">
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
