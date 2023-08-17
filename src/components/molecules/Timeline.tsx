import { ReactNode } from "react";

type TimeLineItem = {
  children: ReactNode;
};

export default function Timeline({ children }: TimeLineItem) {
  return (
    <div className="flex flex-col min-w-full mt-4 mb-10">
      <ol className="border-l-2 border-highlight">{children}</ol>
    </div>
  );
}
