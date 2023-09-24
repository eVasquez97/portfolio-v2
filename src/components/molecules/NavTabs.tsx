"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { routes, variableText } from "@/utils/constants";
import { ubuntu } from "@/app/fonts";

export default function NavTabs() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex w-full mt-5 text-left mb-16 items-center">
      {pathname !== "/" && (
        <button
          type="button"
          onClick={() => router.back()}
          className={`${variableText} mr-4 opacity-60`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      )}
      {routes.map((route) => {
        const isActive = pathname === route.url;
        return (
          <Link
            href={route.url}
            key={route.name}
            className={`${
              isActive
                ? "font-medium text-highlight opacity-1"
                : `${variableText} opacity-60`
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
