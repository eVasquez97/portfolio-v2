type BadgeProps = {
  text?: string;
  styles?: string;
};

export default function Badge({ text, styles }: BadgeProps) {
  return (
    <span
      className={`${styles} whitespace-nowrap rounded-xl bg-highlight px-2 p-1 text-center text-xs leading-none text-text-dark max-w-[88px]`}
    >
      {text}
    </span>
  );
}
