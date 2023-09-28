export const variableText = "dark:text-primary-light text-primary-dark";
export const variableBg = "bg-secondary-light dark:bg-secondary-dark ";
export const statDetail = `${variableText} mb-4 font-medium`;
export const statContainer = "mb-12 md:mb-0";

export const routes = [
  { name: "home", url: "/" },
  { name: "projects", url: "/projects" },
  { name: "experience", url: "/services" },
  { name: "about", url: "/about" },
];

enum TextSize {
  xs = "text-xs",
  sm = "text-sm",
  base = "text-base",
  xl = "text-xl",
  "2xl" = "text-2xl",
  "3xl" = "text-3xl",
  "4xl" = "text-4xl",
  "5xl" = "text-5xl",
}

export function getTextSize(size: keyof typeof TextSize): string {
  return TextSize[size] || TextSize.sm;
}
