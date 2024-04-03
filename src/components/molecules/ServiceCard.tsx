import { variableText } from "@/utils/constants";
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
  return (
    <div className="w-full mb-11">
      <Title
        text={service}
        size="lg"
        styles="font-normal mt-2"
        textColor="text-highlight"
      />

      <p className={`mt-1 mb-2 ${variableText} font-sm`}>{description}</p>
      {benefits?.map((b) => {
        return (
          <p className={`list-item ${variableText} mb-2 ml-6 font-sm`} key={b}>
            {b}
          </p>
        );
      })}
    </div>
  );
}
