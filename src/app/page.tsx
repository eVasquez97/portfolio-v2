import Image from "next/image";
import data from "../utils/data.json";
import { Title } from "@/components/atoms";
import ContactForm from "@/components/organisms/ContactForm";
import { Banner } from "@/components/organisms";
import SericeCard from "@/components/molecules/ServiceCard";

export default function Home() {
  const { cover, services } = data;
  return (
    <div className="flex flex-col bg-primary-light dark:bg-primary-dark p-5 w-full">
      <div className="flex felx-col items-center justify-center"></div>
    </div>

    // <div className="w-full flex flex-col">
    //   <Banner>
    //     <Title
    //       text="Services"
    //       size="2xl"
    //       styles="font-bold text-center p-20"
    //     />
    //     <div className="grid grid-cols-1 md:grid-cols-3 min-w-full mb-4 p-4 gap-4">
    //       {services?.map((sr) => {
    //         return (
    //           <SericeCard
    //             key={sr.service}
    //             description={sr.description}
    //             benefits={sr.benefits}
    //             service={sr.service}
    //             logo={sr.logo}
    //           />
    //         );
    //       })}
    //     </div>
    //   </Banner>
    // </div>
    // <div className="max-w-[1024px] w-full mb-12">
    //   <div className="grid grid-cols-1 md:grid-cols-2 min-w-full mb-10 p-1 gap-1">
    //     <div>
    //       <Title text="Contact Me" size="xl" />
    //       <ContactForm />
    //     </div>
    //     <Image
    //       alt="banner1"
    //       src="/img/banner1.jpg"
    //       width={300}
    //       height={300}
    //       className="w-full"
    //     />
    //   </div>
    // </div>
  );
}
