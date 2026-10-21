import { getTextSize } from "@/utils/constants";
import { TitleType } from "./atomTypes";

export default function Title({
  text,
  size = "lg",
  styles = "",
  textColor = "",
  as: Tag = "h2",
}: TitleType) {
  const textSize = getTextSize(size);
  return (
    <Tag
      className={`font-[600] ${textSize} ${styles} ${textColor} app-border w-full border-b pb-1 opacity-90`}
    >
      {text}
    </Tag>
  );
}
