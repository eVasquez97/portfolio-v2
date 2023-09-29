"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes, variableText } from "@/utils/constants";

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex text-left my-6 items-center">
      {routes.map((route) => {
        const isActive = pathname === route.url;
        return (
          <Link
            href={route.url}
            key={route.name}
            className={`${
              isActive ? "font-semibold opacity-1" : `opacity-80`
            } ${variableText} mx-2 first:ml-0 last:mr-0 hover:scale-105`}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
