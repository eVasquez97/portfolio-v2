export const variableText = "dark:text-primary-light text-primary-dark";
export const variableBg = "bg-secondary-light dark:bg-secondary-dark ";
export const statDetail = `${variableText} mb-4 font-medium`;
export const statContainer = "mb-12 md:mb-0";

export const routes = [
  { name: "Projects", url: "/projects" },
  { name: "Experience", url: "/services" },
];

enum TextSize {
  xs = "text-xs",
  sm = "text-sm",
  base = "text-base",
  lg = "text-lg",
  xl = "text-xl",
  "2xl" = "text-2xl",
  "3xl" = "text-3xl",
  "4xl" = "text-4xl",
  "5xl" = "text-5xl",
}

export function getTextSize(size: keyof typeof TextSize): string {
  return TextSize[size] || TextSize.sm;
}

export const showIcon =
  "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25";
