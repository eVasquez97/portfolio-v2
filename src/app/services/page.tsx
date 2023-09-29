import { Quote } from "@/components/organisms";
import data from "../../utils/data.json";
import { ServiceCard, Skill } from "@/components/molecules";
import { Title } from "@/components/atoms";
import DetailedBadge from "@/components/molecules/DetailedBadge";
import { variableText } from "@/utils/constants";
import { DetailedBadgeType } from "./DetailedBadgeType";

export default function Services() {
  const {
    programmingLanguages,
    dbTech,
    cloudServices,
    otherTech,
    frameworks,
    techStacks,
    services,
  } = data;
  const gridStyle = "grid grid-cols-1 md:grid-cols-2 min-w-full gap-3";
  const internalSection = "flex flex-row flex-wrap w-full";
  const titleStyle = "my-5 font-semibold";

  function itemsSection(items: any[], title: string) {
    return (
      <div className="w-full h-full my-2">
        <Title text={title} size="base" styles={titleStyle} />
        <div className={internalSection}>
          {items.map((item: DetailedBadgeType) => {
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
      <Title text="Most used tech stacks" size="base" styles={titleStyle} />
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
        <p className={`${variableText}`}>
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

      <div className="bg-primary-light dark:bg-primary-dark mt-8">
        <p className={variableText}>
          Throughout these years working on the IT sector, I have performed
          several roles and provided a lot of services, but when it comes to
          programming effective solutions ⭐, these are the main technologies
          that I have used:
        </p>
        <div className="w-full flex flex-col flex-wrap my-6">
          {itemsSection(programmingLanguages, "Programming languages")}
          {itemsSection(frameworks, "Frameworks")}
          {itemsSection(dbTech, "Databases")}
          {itemsSection(cloudServices, "Cloud services")}
          {itemsSection(otherTech, "Other skills")}
        </div>
      </div>
    </div>
  );
}
