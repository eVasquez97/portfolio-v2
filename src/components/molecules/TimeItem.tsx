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
    <li className="transition duration-300 ease-in-out hover:scale-95">
      <a href={url} target="_blank">
        <div className="flex-start flex items-center">
          <div className="-ml-[9px] mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-highlight"></div>
          <Title text={title} size="base" />
        </div>
        <div className="mb-6 ml-6 pb-6">
          <span className="text-sm opacity-60">{time}</span>
          <p className="text-sm text-text-light dark:text-text-dark">
            {description}
          </p>
        </div>
      </a>
    </li>
  );
}
