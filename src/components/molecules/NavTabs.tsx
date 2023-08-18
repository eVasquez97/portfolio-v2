"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes } from "@/utils/constants";

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
            } mr-4 last:mr-0"
              `}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
