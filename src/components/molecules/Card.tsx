import Image from "next/image";
import { Title } from "../atoms";
import { variableBg, variableBorder } from "@/utils/constants";

type CardProps = {
  name: string;
  time?: string;
  certificationID?: string | number;
  headerColor?: string;
  url?: string;
  company?: string;
  img?: string;
};

export default function Card({ ...props }: CardProps) {
  const image = props.img ?? "/img/banner1.jpg";
  return (
    <div
      className={`${variableBg} ${variableBorder} block md:max-w-lg w-full rounded-sm shadow-sm m-2`}
    >
      <a href={props.url} target="_blank">
        <div className="relative overflow-hidden bg-cover bg-no-repeat h-40">
          <Image
            className="w-full object-cover transition duration-300 ease-in-out hover:scale-105"
            src={image}
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="p-4">
          <Title text={props.name} size="base" />
          <p className="text-sm text-highlight opacity-80">
            <strong className="text-text-light dark:text-text-dark">
              {props.company}
              {"  -  "}
            </strong>
            {props.time}
          </p>
        </div>
      </a>
    </div>
  );
}
