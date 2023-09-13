type BadgeProps = {
  text?: string;
  styles?: string;
};

export default function Badge({ text, styles }: BadgeProps) {
  return (
    <span
      className={`${styles} whitespace-nowrap rounded-xl bg-highlight px-3 p-2 text-center text-base leading-none text-text-dark max-w-[120px]`}
    >
      {text}
    </span>
  );
}
