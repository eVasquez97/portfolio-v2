"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes, variableBg, variableText } from "@/utils/constants";
import { tenor } from "@/app/fonts";

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row justify-end w-full mb-11 pb-2 opacity-80 border-b-2 border-b-secondaryText-light dark:border-b-secondaryText-dark">
      {routes.map((route) => {
        const isActive = pathname === route.url;
        return (
          <Link
            href={route.url}
            key={route.name}
            className={`${tenor.className} ${
              isActive &&
              `${variableBg} border border-secondaryText-light dark:border-secondaryText-dark rounded`
            } ${variableText} mx-1.5 px-1 first:ml-0 last:mr-0 text-sm`}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
