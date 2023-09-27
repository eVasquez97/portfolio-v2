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

export function getTextSize(size: string) {
  switch (size) {
    case "xs":
      return "text-xs";
    case "sm":
      return "text-sm";
    case "base":
      return "text-base";
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    case "3xl":
      return "text-3xl";
    case "4xl":
      return "text-4xl";
    case "5xl":
      return "text-5xl";
    default:
      return "text-sm";
  }
}
