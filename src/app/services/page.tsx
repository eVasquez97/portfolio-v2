import { Title } from "@/components/atoms";
import { Banner, ContacForm, Quote } from "@/components/organisms";
import data from "../../utils/data.json";
import { ServiceCard } from "@/components/molecules";
import Image from "next/image";

export default function Projects() {
  const { services } = data;

  return (
    <div className="w-full flex flex-col">
      <Banner>
        {/* <Title text="Services" size="2xl" styles="font-bold text-center p-20" /> */}
        <div className="grid grid-cols-1 md:grid-cols-3 min-w-full mb-4 mt-5 p-4 gap-4">
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
      <Quote quote="“If no mistake you have made, yet losing you are…a different game you should play.” - Yoda" />

      <div className="w-full mb-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 min-w-full mb-10 p-1 gap-4 items-center justify-center">
          <div>
            <Title text="Contact Me" size="xl" styles="text-center" />
            <ContacForm />
          </div>
          <Image
            alt="banner1"
            src="/img/banner1.jpg"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
