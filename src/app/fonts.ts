import { Montserrat, Cardo } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--montserrat-font",
});

export const cardo = Cardo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--cardo-font",
});
