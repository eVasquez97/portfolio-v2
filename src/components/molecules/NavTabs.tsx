"use client";
import { routes, variableText } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            className={`${
              isActive && "font-semibold opacity-100"
            } ${variableText} mx-2 first:ml-0 last:mr-0 opacity-60`}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
