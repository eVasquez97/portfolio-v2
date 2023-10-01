import { variableText } from "@/utils/constants";

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
  return (
    <div className="w-full mb-11">
      <p className={`${variableText} font-normal mt-2 underline`}>{service}</p>
      <p className={`mt-1 mb-2 ${variableText} font-light`}>{description}</p>
      {benefits?.map((b) => {
        return (
          <p
            className={`list-item ${variableText} mb-2 ml-6 font-light`}
            key={b}
          >
            {b}
          </p>
        );
      })}
    </div>
  );
}
