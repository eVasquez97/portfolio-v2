"use client";
import { routes, variableText } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full my-4 pb-3 border-b border-b-secondaryText-light/30 dark:border-b-secondaryText-dark/30 gap-2 sm:gap-0">
      <Link
        href="/"
        className={`${
          isHome
            ? "font-bold text-highlight opacity-100"
            : "opacity-60 hover:opacity-90"
        } ${variableText} text-left transition-opacity`}
      >
        Eduardo Vásquez
      </Link>
      <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-1">
        {routes.map((route) => {
          const isActive = pathname === route.url;
          return (
            <Link
              href={route.url}
              key={route.name}
              className={`${
                isActive
                  ? "font-bold text-highlight opacity-100"
                  : "opacity-60 hover:opacity-90"
              } ${variableText} transition-opacity whitespace-nowrap text-sm`}
            >
              {route.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
