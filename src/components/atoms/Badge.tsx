type BadgeProps = {
  text?: string;
  styles?: string;
  background?: string;
  textColor?: string;
};

export default function Badge({
  text,
  styles,
  background = "bg-highlight",
  textColor = "text-primary-light",
}: BadgeProps) {
  return (
    <span
      className={`${styles} ${background} ${textColor} whitespace-nowrap rounded-xl px-2 p-2 text-center text-xs leading-none capitalize`}
    >
      {text}
    </span>
  );
}
