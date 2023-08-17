export const routes = [
  { name: "Main", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Skills", url: "/skills" },
  { name: "Education", url: "/courses" },
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
    default:
      return "text-sm";
  }
}
