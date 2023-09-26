"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes, variableText } from "@/utils/constants";
import { ubuntu } from "@/app/fonts";

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex text-left mb-16 items-center">
      {routes.map((route) => {
        const isActive = pathname === route.url;
        return (
          <Link
            href={route.url}
            key={route.name}
            className={`${
              isActive
                ? "font-medium text-highlight opacity-1"
                : `${variableText} opacity-80`
            } ${ubuntu.className} mr-6 last:mr-0 hover:scale-105 text-xs"
              `}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
