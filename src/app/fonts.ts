import { Inter, Lora } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
  display: "swap",
  variable: "--inter-font",
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--lora-font",
});
