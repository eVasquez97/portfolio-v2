import { variableText } from "@/utils/constants";

type MediaButton = {
  name: string;
  url: string;
  icon: string;
};

export default function SocialButton({ name, url, icon }: MediaButton) {
  return (
    <a
      href={url}
      target="_blank"
      aria-label={name}
      className={` ${variableText} m-2 p-2 object-contain hover:scale-105 bg-secondary-light dark:bg-secondary-dark shadow-sm rounded-sm`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={icon} />
      </svg>
    </a>
  );
}
