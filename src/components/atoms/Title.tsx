import { ubuntu } from "@/app/fonts";
import { getTextSize } from "@/utils/constants";

type Title = {
  text: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  styles?: string;
};

export default function Title({ text, size = "xl", styles }: Title) {
  const textSize = getTextSize(size);
  return (
    <p
      className={`${ubuntu.className} font-[400] ${textSize} ${styles} dark:text-text-dark text-text-light mt-2 text`}
    >
      {text}
    </p>
  );
}
