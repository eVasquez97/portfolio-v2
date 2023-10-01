import { variableText } from "@/utils/constants";
import Icon from "../atoms/Icon";

type MediaButton = {
  name: string;
  url: string;
  icon: string;
  viewBox?: string;
};

export default function SocialButton({
  name,
  url,
  icon,
  viewBox,
}: MediaButton) {
  return (
    <a
      href={url}
      target="_blank"
      aria-label={name}
      className={` ${variableText} mx-2 hover:scale-105`}
    >
      <Icon
        icon={icon}
        styles="w-4 h-4"
        fill="currentColor"
        stroke="none"
        viewBox={viewBox}
      />
    </a>
  );
}
