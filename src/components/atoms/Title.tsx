import { ubuntu } from "@/app/fonts";
import { getTextSize, variableText } from "@/utils/constants";

type Title = {
  text: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  styles?: string;
  textColor?: string;
};

export default function Title({
  text,
  size = "xl",
  styles,
  textColor = variableText,
}: Title) {
  const textSize = getTextSize(size);
  return (
    <p
      className={`${ubuntu.className} font-[400] ${textSize} ${styles} ${textColor}`}
    >
      {text}
    </p>
  );
}
