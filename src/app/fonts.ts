import { Open_Sans, Ubuntu } from "next/font/google";

export const sans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--sans-font",
});

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--ubuntu-font",
});
