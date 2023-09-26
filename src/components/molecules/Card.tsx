import Image from "next/image";
import { Title } from "../atoms";
import { variableBg } from "@/utils/constants";

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
      className={`${variableBg} border border-secondaryText-light dark:border-secondaryText-dark block md:max-w-lg w-full rounded shadow-sm m-2`}
    >
      <a href={props.url} target="_blank">
        <div className="relative overflow-hidden bg-no-repeat">
          <Image
            className="w-full h-32 object-cover transition duration-300 ease-in-out hover:scale-105 object-top"
            src={image}
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="p-4">
          <Title
            text={props.name}
            size="base"
            styles="font-semibold truncate mb-1"
          />
          <p className="text-sm opacity-80">
            <strong className="text-text-light dark:text-text-dark font-semibold">
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
