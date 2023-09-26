"use client";
import { routes } from "@/utils/constants";
import { useRouter, usePathname } from "next/navigation";

export default function LightSaber() {
  const router = useRouter();
  const pathname = usePathname();

  function changeRoute(route: string) {
    if (route !== pathname) {
      router.push(`${route}`);
    }
  }

  return (
    <div className="flex flex-row justify-center mb-11 mt-4">
      <div className="w-44 bg-secondary-dark h-[22px] rounded z-20 border border-secondaryText-dark flex items-center justify-center border-x-4 border-x-saberBase">
        <select
          value={pathname}
          className="bg-secondary-dark px-1 text-text-dark self-center font-medium border-r-2 border-r-saberBase focus:outline-none"
          onChange={(e) => changeRoute(e.target.value)}
        >
          {routes?.map((r) => {
            return (
              <option value={r.url} key={r.name}>
                {r.name}
              </option>
            );
          })}
        </select>
      </div>
      <div
        className="rounded-lg w-full h-[10px] -ml-2 mt-1.5
    shadow-[0_0_4px_highlight,_0_0_4px_highlight,_0_0_8px_highlight,_0_0_16px_#03e9f4]
    dark:shadow-[0_0_4px_red,_0_0_8px_red,_0_0_16px_red,_0_0_64px_#ef4444] 
     bg-primary-light animate-pulse ease-in-out"
      ></div>
    </div>
  );
}
