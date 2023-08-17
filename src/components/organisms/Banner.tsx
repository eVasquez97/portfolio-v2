import { HTMLAttributes, ReactNode } from "react";

type BannerContent = {
  children: ReactNode;
  styles?: HTMLAttributes<HTMLDivElement>;
};

export default function Banner({ children, styles }: BannerContent) {
  return (
    <div
      className={`${styles} bg-[linear-gradient(90deg,_rgba(242,242,242,1)_0%,_rgba(0,120,212,1)_100%)] dark:bg-[linear-gradient(90deg,_rgba(32,33,36,1)_0%,_rgba(0,120,212,1)_100%);] w-full min-h-[100px] mb-10`}
    >
      {children}
    </div>
  );
}
