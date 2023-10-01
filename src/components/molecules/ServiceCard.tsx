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
      <p className="text-highlight font-normal mt-2">{service}</p>
      <p className={`mt-1 mb-2 ${variableText} `}>{description}</p>
      {benefits?.map((b) => {
        return (
          <p className={`list-item ${variableText} mb-2 ml-6 `} key={b}>
            {b}
          </p>
        );
      })}
    </div>
  );
}
