import { Title } from "../atoms";
import { variableBg, variableText } from "@/utils/constants";

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
  return (
    <div
      className={`${variableBg} ${variableText} border border-secondaryText-light dark:border-secondaryText-dark block md:max-w-lg w-full`}
    >
      <a href={props.url} target="_blank">
        <div className="p-4">
          <Title
            text={props.name}
            size="base"
            styles="font-semibold truncate mb-1"
          />
          <p className="text-sm opacity-80 text-text-light dark:text-text-dark font-semibold">
            {props.company}
          </p>
          <p className="text-sm opacity-80">
            {props.time}
            <div className="z-[1] float-right block right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 ml-2 opacity-60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </p>
        </div>
      </a>
    </div>
  );
}
