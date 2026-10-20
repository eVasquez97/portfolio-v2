import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          dark: "#000000",
        },
        secondary: {
          light: "#f5f5f7",
          dark: "#1c1c1e",
        },
        highlight: "#0071e3",
        text: {
          light: "#1d1d1f",
          dark: "#fbfbfb",
        },
        secondaryText: {
          light: "#86868b",
          dark: "#98989d",
        },
        saberBase: "#BFC9CA",
        saberTop: "#F5B041",
      },
      animation: {
        typing: "typing 3.5s steps(30, end)",
        "blink-caret": "blink-carret .5s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
