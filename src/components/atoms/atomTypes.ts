export type TitleType = {
  text: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  styles?: string;
  textColor?: string;
  as?: "h1" | "h2" | "h3";
};

export type IconType = {
  icon: string;
  styles?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  color?: string;
  viewBox?: string;
};
