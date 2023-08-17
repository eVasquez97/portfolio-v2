"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routes } from "@/utils/constants";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="bg-secondary-light dark:bg-secondary-dark p-2 w-full 
      fixed inset-x-0 bottom-0 mx-auto"
    >
      <div className="flex justify-center mx-auto max-w-[1024px]">
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
    </footer>
  );
}
