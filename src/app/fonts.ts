import { Adamina, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
  variable: "--inter-font",
});

export const adamia = Adamina({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--adamia-font",
});
