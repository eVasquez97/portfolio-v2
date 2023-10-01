"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes, variableText } from "@/utils/constants";

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row justify-end w-full mt-5 mb-12 pb-2 border-b-2 border-b-secondaryText-light dark:border-b-secondaryText-dark">
      {routes.map((route) => {
        const isActive = pathname === route.url;
        return (
          <Link
            href={route.url}
            key={route.name}
            className={` ${
              isActive && "font-semibold opacity-100"
            } ${variableText} mx-1.5 px-1 first:ml-0 last:mr-0 text-sm opacity-60`}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
