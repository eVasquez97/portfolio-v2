"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes, variableText } from "@/utils/constants";
import { lora } from "@/app/fonts";

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row w-full mt-8 mb-2 pb-2 border-b border-b-secondaryText-light dark:border-b-secondaryText-dark">
      {routes.map((route) => {
        const isActive = pathname === route.url;
        return (
          <Link
            href={route.url}
            key={route.name}
            className={`${lora.className} ${
              isActive && "font-normal opacity-100"
            } ${variableText} font-light text-sm mx-2 first:ml-0 last:mr-0 opacity-60`}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
