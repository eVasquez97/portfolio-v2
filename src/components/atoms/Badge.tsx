import { BadgeType } from "./atomTypes";

export default function Badge({
  text,
  styles,
  background = "bg-highlight",
  textColor = "text-primary-light",
}: BadgeType) {
  return (
    <span
      className={`${styles} ${background} ${textColor} whitespace-nowrap rounded-xl px-2 p-1.5 text-center text-xs leading-none capitalize`}
    >
      {text}
    </span>
  );
}
