"use client";

import Icon from "@/components/atoms/Icon";
import data from "@/utils/data.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

const homeIcon =
  "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75";

export default function KeyboardNav() {
  const pathname = usePathname();
  const { socialMedia } = data;

  const linkedIn = socialMedia.find((s) => s.name === "LinkedIn");
  const twitter = socialMedia.find((s) => s.name === "Twitter");
  const github = socialMedia.find((s) => s.name === "Github");

  const navItems = [
    { name: "Home", url: "/", isHome: true },
    { name: "Projects", url: "/projects" },
    { name: "Experience", url: "/services" },
    { name: "Courses", url: "/courses" },
    { name: "About", url: "/about" },
  ];

  const keycapBase =
    "relative inline-flex items-center justify-center font-semibold text-xs sm:text-sm tracking-tight transition-all duration-150 rounded-xl px-3 sm:px-3.5 py-1.5 sm:py-2 cursor-pointer select-none border border-b-2";

  const getNavKeyStyle = (isActive: boolean) =>
    isActive
      ? `${keycapBase} bg-highlight text-white border-highlight shadow-md shadow-highlight/20 active:translate-y-[1px]`
      : `${keycapBase} bg-neutral-100/90 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700/80 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 hover:text-neutral-900 dark:hover:text-white active:translate-y-[1px]`;

  const socialKeyStyle = `${keycapBase} bg-neutral-100/90 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700/80 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 hover:text-neutral-900 dark:hover:text-white active:translate-y-[1px] p-2 sm:p-2 min-w-[36px] sm:min-w-[40px]`;

  return (
    <nav
      aria-label="Main Navigation"
      className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-auto max-w-2xl"
    >
      <div className="bg-white/85 dark:bg-neutral-900/85 backdrop-blur-2xl border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-1.5 sm:p-2 shadow-2xl shadow-black/10 dark:shadow-black/50 flex flex-wrap sm:flex-nowrap items-center justify-center gap-1 sm:gap-1.5">
        <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap sm:flex-nowrap justify-center w-full sm:w-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link
                key={item.name}
                href={item.url}
                className={getNavKeyStyle(isActive)}
              >
                {item.isHome && (
                  <Icon
                    icon={homeIcon}
                    styles={`w-4 h-4 mr-1.5 flex-shrink-0 ${
                      isActive ? "text-white" : "currentColor"
                    }`}
                    fill="none"
                    stroke={isActive ? "#ffffff" : "currentColor"}
                    strokeWidth="2.2"
                  />
                )}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden sm:block h-5 w-px bg-neutral-200 dark:bg-neutral-800 mx-0.5 flex-shrink-0" />

        <div className="flex items-center gap-1 sm:gap-1.5 justify-center mt-1 sm:mt-0">
          {linkedIn && (
            <a
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={socialKeyStyle}
            >
              <Icon icon={linkedIn.icon} styles="w-4 h-4" fill="currentColor" />
            </a>
          )}

          {twitter && (
            <a
              href={twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className={socialKeyStyle}
            >
              <Icon
                icon={twitter.icon}
                styles="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 50 50"
              />
            </a>
          )}

          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={socialKeyStyle}
            >
              <Icon icon={github.icon} styles="w-4 h-4" fill="currentColor" />
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
