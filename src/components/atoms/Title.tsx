import { getTextSize } from "@/utils/constants";
import { TitleType } from "./atomTypes";

export default function Title({
  text,
  size = "lg",
  styles = "",
  textColor = "",
}: TitleType) {
  const textSize = getTextSize(size);
  return (
    <h1
      className={`font-[500] ${textSize} ${styles} ${textColor} opacity-80 w-full border-b app-border`}
    >
      {text}
    </h1>
  );
}
