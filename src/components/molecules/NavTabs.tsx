"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes, variableText } from "@/utils/constants";

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex text-left mb-11 pb-1 items-center border-b-2 border-b-secondaryText-light dark:border-b-secondaryText-dark opacity-60">
      {routes.map((route) => {
        const isActive = pathname === route.url;
        return (
          <Link
            href={route.url}
            key={route.name}
            className={`${
              isActive && "font-semibold"
            } ${variableText} mx-2 first:ml-0 last:mr-0 capitalize`}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
