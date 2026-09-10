"use client";
import { routes, variableText } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="flex flex-row w-full my-8 pb-2 border-b border-b-secondaryText-light dark:border-b-secondaryText-dark">
      <Link
        href="/"
        className={`${
          isHome
            ? "font-bold text-highlight opacity-100"
            : "opacity-60 hover:opacity-90"
        } ${variableText} text-left w-full transition-opacity`}
      >
        Eduardo Vásquez
      </Link>
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
            } ${variableText} mx-2 first:ml-0 last:mr-0 transition-opacity whitespace-nowrap`}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
