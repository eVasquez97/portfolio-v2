"use client";
import { Quote } from "@/components/organisms";
import data from "../../utils/data.json";
import { ServiceCard, PaginatedTable } from "@/components/molecules";
import { Title } from "@/components/atoms";
import { variableText } from "@/utils/constants";
import Image from "next/image";

export default function Services() {
  const { techStacks, services } = data;

  return (
    <div className="w-full flex flex-col">
      <div className="mb-6">
        <Title text="Most used tech stacks" styles="text-lg mb-3" />
        <PaginatedTable
          headers={["", "Technology & Experience"]}
          data={techStacks}
          itemsPerPage={4}
          renderRow={(ts) => (
            <tr
              key={ts.name}
              className="px-2 border-t-[1px] border-t-secondaryText-light/30 dark:border-t-secondaryText-dark/30 group hover:bg-secondary-light/40 dark:hover:bg-secondary-dark/40 transition-colors"
            >
              <td className="py-3.5 pr-3 align-middle w-16">
                {ts.logo && (
                  <Image
                    src={ts.logo}
                    alt={ts.name}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                )}
              </td>
              <td className="px-1 py-3.5 align-middle">
                <div className="flex flex-col">
                  <p className="font-semibold text-sm text-highlight flex items-baseline flex-wrap">
                    <span>{ts.name}</span>
                    {ts.experience && (
                      <span
                        className={`${variableText} text-xs font-normal opacity-70 ml-2`}
                      >
                        ({ts.experience})
                      </span>
                    )}
                  </p>
                  {ts.description && (
                    <p className="text-xs opacity-75 mt-0.5">
                      {ts.description}
                    </p>
                  )}
                </div>
              </td>
            </tr>
          )}
        />
      </div>

      <div className="mb-6">
        <Title text="Services" styles="text-lg mb-3" />
        <p className={`${variableText} text-sm opacity-80 mb-4`}>
          Some of the main engineering services I provide:
        </p>
        <div className="min-w-full mb-8">
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
