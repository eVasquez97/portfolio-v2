import { getTextSize, variableText } from "@/utils/constants";
import { TitleType } from "./atomTypes";

export default function Title({
  text,
  size = "xl",
  styles = "",
  textColor = variableText,
}: TitleType) {
  const textSize = getTextSize(size);
  return (
    <p className={`font-[400] ${textSize} ${styles} ${textColor}`}>{text}</p>
  );
}
