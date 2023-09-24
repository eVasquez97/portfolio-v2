import { Roboto, Ubuntu } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
  variable: "--roboto-font",
});

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--ubuntu-font",
});
