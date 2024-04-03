import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        light: "#ffffff",
        dark: "#000000",
      },
      secondary: {
        light: "#fafafa",
        dark: "#262626",
      },
      highlight: "#007acc",
      text: {
        light: "#000000",
        dark: "#fbfbfb",
      },
      secondaryText: {
        light: "#E5E5E5",
        dark: "#404040",
      },
      saberBase: "#BFC9CA",
      saberTop: "#F5B041",
    },
    extend: {
      animation: {
        typing: "typing 3.5s steps(30, end)",
        "blink-caret": "blink-carret .5s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
