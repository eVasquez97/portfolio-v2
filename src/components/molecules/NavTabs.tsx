"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes } from "@/utils/constants";
import { ubuntu } from "@/app/fonts";

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center mx-auto max-w-5xl m-5">
      {routes.map((route) => {
        const isActive = pathname === route.url;
        return (
          <Link
            href={route.url}
            key={route.name}
            className={`${
              isActive
                ? "text-highlight font-bold"
                : "text-text-light dark:text-text-dark"
            } ${ubuntu.className} mr-4 last:mr-0 hover:scale-105"
              `}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
