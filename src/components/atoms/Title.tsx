import { getTextSize } from "@/utils/constants";
import { HTMLAttributes } from "react";

type Title = {
  text: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  styles?: string;
};

export default function Title({ text, size = "sm", styles }: Title) {
  const textSize = getTextSize(size);
  return (
    <p
      className={`${textSize} ${styles} dark:text-text-dark text-text-light mt-2 text`}
    >
      {text}
    </p>
  );
}
