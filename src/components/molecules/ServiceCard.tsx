import Image from "next/image";
import { Title } from "../atoms";

type Service = {
  service: string;
  description: string;
  benefits: string[];
  logo: string;
};

export default function ServiceCard({
  service,
  description,
  benefits,
  logo,
}: Service) {
  const adaptableText = "text-sm text-primary-dark dark:text-primary-light";

  return (
    <div
      className="w-full min-h-40 bg-secondary-light dark:bg-secondary-dark shadow-sm rounded-sm self-center 
      mb-4 p-4 mx-auto space-x-4 hover:scale-105 duration-300"
    >
      <Image
        alt={service}
        src={logo}
        width={144}
        height={160}
        className="mx-auto object-cover font"
      />
      <Title
        text={service}
        size="xl"
        styles="text-center font-bold mt-3 text-2xl"
      />
      <p className={`font-extralight mt-4 mb-4 ${adaptableText}`}>
        {description}
      </p>
      {benefits?.map((b) => {
        return (
          <p className={`list-item opacity-75 ${adaptableText}`} key={b}>
            {b}
          </p>
        );
      })}
    </div>
  );
}
