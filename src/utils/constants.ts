export const routes = [
  { name: "Projects", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Skills", url: "/skills" },
  { name: "About me", url: "/about" },
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
