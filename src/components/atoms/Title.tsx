import { getTextSize, variableText } from "@/utils/constants";
import { TitleType } from "./atomTypes";

export default function Title({
  text,
  size = "lg",
  styles = "",
  textColor = variableText,
}: TitleType) {
  const textSize = getTextSize(size);
  return (
    <h1
      className={`font-[500] ${textSize} ${styles} ${textColor} border-b-2 opacity-80 w-full`}
    >
      {text}
    </h1>
  );
}
