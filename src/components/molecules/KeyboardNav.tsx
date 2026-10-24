"use client";

import Icon from "@/components/atoms/Icon";
import data from "@/utils/data.json";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const icons: Record<string, string> = {
  Back: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18",
  Home: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75",
  Projects:
    "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
  Courses:
    "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  About:
    "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
};

export default function KeyboardNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { socialMedia } = data;
  const isProjectDetail = /^\/projects\/.+/.test(pathname);

  const linkedIn = socialMedia.find((s) => s.name === "LinkedIn");
  const twitter = socialMedia.find((s) => s.name === "Twitter");
  const github = socialMedia.find((s) => s.name === "Github");

  const navItems = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Courses", url: "/courses" },
    { name: "About", url: "/about" },
  ];

  const socialBtnStyle =
    "focus-ring relative inline-flex items-center justify-center rounded-full p-2.5 text-neutral-700 dark:text-neutral-300 bg-neutral-100/80 dark:bg-neutral-800/80 hover:bg-highlight/15 hover:text-highlight dark:hover:bg-highlight/20 dark:hover:text-highlight transition-all duration-300 ease-out active:scale-95";

  return (
    <nav
      aria-label="Main Navigation"
      className="z-10 mx-auto w-full max-w-[94%] flex-shrink-0 sm:max-w-xl"
    >
      <div className="flex flex-col gap-1.5 rounded-[28px] border border-neutral-200/80 bg-white/90 px-3 py-2 shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-neutral-800/80 dark:bg-neutral-900/90 dark:shadow-black/50 sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-4 sm:py-2.5">
        <div className="flex w-full flex-1 items-center justify-around gap-1 sm:w-auto sm:justify-start sm:gap-1.5">
          {isProjectDetail && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back"
              className="focus-ring group flex flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-0.5 text-center sm:flex-initial sm:flex-row sm:gap-2"
            >
              <span className="flex items-center justify-center rounded-full border border-neutral-200/80 bg-neutral-100/80 px-3 py-1.5 text-neutral-700 transition-all duration-300 ease-out group-hover:bg-highlight/10 group-hover:text-highlight dark:border-neutral-800/80 dark:bg-neutral-800/60 dark:text-neutral-300 dark:group-hover:bg-highlight/15 sm:px-3.5 sm:py-2">
                <Icon
                  icon={icons.Back}
                  styles="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </span>
              <span className="text-[11px] font-semibold leading-tight tracking-tight text-neutral-700 transition-colors duration-200 group-hover:text-highlight dark:text-neutral-300 sm:hidden">
                Back
              </span>
            </button>
          )}
          {navItems.map((item) => {
            const isActive =
              item.url === "/"
                ? pathname === "/"
                : pathname.startsWith(item.url);
            return (
              <Link
                key={item.name}
                href={item.url}
                aria-current={isActive ? "page" : undefined}
                className="focus-ring group flex flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-0.5 text-center sm:flex-initial sm:flex-row sm:gap-2"
              >
                <span
                  className={`flex items-center justify-center rounded-full px-3.5 py-1.5 transition-all duration-300 ease-out sm:px-4 sm:py-2 ${
                    isActive
                      ? "scale-105 bg-highlight text-white shadow-sm shadow-highlight/25"
                      : "text-neutral-700 group-hover:bg-highlight/10 group-hover:text-highlight dark:text-neutral-300 dark:group-hover:bg-highlight/15"
                  }`}
                >
                  <Icon
                    icon={icons[item.name]}
                    styles="w-4 h-4 sm:mr-1.5 flex-shrink-0"
                    fill="none"
                    stroke={isActive ? "#ffffff" : "currentColor"}
                    strokeWidth={isActive ? "2.3" : "1.9"}
                  />
                  <span className="hidden text-xs font-semibold tracking-tight sm:inline">
                    {item.name}
                  </span>
                </span>
                <span
                  className={`text-[11px] font-semibold leading-tight tracking-tight transition-colors duration-200 sm:hidden ${
                    isActive
                      ? "text-highlight"
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-3 border-t border-neutral-200 pt-1.5 dark:border-neutral-800 sm:ml-1 sm:justify-end sm:gap-1.5 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
          {linkedIn && (
            <a
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={socialBtnStyle}
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
              className={socialBtnStyle}
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
              className={socialBtnStyle}
            >
              <Icon icon={github.icon} styles="w-4 h-4" fill="currentColor" />
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
