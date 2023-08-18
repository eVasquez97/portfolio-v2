import { HTMLAttributes, ReactNode } from "react";

type BannerContent = {
  children: ReactNode;
  styles?: HTMLAttributes<HTMLDivElement>;
  background?: string;
};

export default function Banner({
  children,
  styles,
  background = "bg-highlight",
}: BannerContent) {
  return (
    <div
      className={`${styles} ${background} min-w-full min-h-[100px] mb-10 inset-x-0`}
    >
      {children}
    </div>
  );
}
