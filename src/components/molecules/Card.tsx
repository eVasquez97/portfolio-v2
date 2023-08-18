import Image from "next/image";
import { Title } from "../atoms";

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
    <div className="block md:max-w-[18rem] w-full rounded-sm bg-secondary-light dark:bg-secondary-dark shadow-sm m-2">
      <a href={props.url} target="_blank">
        <div className="relative overflow-hidden bg-cover bg-no-repeat h-40">
          <Image
            className="w-full object-cover transition duration-300 ease-in-out hover:scale-110"
            src={image}
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className="p-3">
          <Title text={props.name} size="sm" />
          <p className="text-xs text-highlight opacity-90">
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
