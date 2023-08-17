import Image from "next/image";
import { Title } from "../atoms";

type Service = {
  service: string;
  description: string;
  benefits: string[];
  logo: string;
};

export default function SericeCard({
  service,
  description,
  benefits,
  logo,
}: Service) {
  return (
    <div
      className="w-full min-h-40 bg-secondary-light dark:bg-secondary-dark shadow-sm rounded-sm self-center mb-4 p-4 mx-auto 
          space-x-4 hover:scale-105 duration-300"
    >
      <Image
        alt={service}
        src={logo}
        width={120}
        height={120}
        className="mx-auto object-cover font"
      />
      <Title text={service} size="xl" styles="text-center font-bold mt-3" />
      <Title text={description} size="xs" styles="font-extralight mt-4 mb-4" />
      {benefits?.map((b) => {
        return (
          <Title text={b} size="xs" key={b} styles="list-item opacity-75" />
        );
      })}
    </div>
  );
}
