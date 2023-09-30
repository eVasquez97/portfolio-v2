import { Lato, Tenor_Sans } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
  display: "swap",
  variable: "--lato-font",
});

export const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--tenor-font",
});
