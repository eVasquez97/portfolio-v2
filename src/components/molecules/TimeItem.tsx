import Image from "next/image";
import { Title } from "../atoms";

type TimeLinePeriod = {
  description: string;
  title: string;
  time: string;
  image: string;
  url?: string;
};

export default function TimeItem({
  description,
  title,
  time,
  image,
  url,
}: TimeLinePeriod) {
  return (
    <li className="md:hover:scale-95 hover:scale-90 duration-300 hover:shadow-lg">
      <a href={url} target="_blank">
        <div className="flex-start flex items-center">
          <div className="-ml-[20px] mt-2 mr-3 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-highlight">
            {image && (
              <Image
                alt={title}
                src={image}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
          </div>
          <Title text={title} size="xl" />
        </div>
        <div className="mb-6 ml-6 pb-6">
          <span className="text-sm text-highlight">{time}</span>
          <Title text={description} size="sm" />
        </div>
      </a>
    </li>
  );
}
