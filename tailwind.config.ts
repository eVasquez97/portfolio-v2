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
        light: "#f2f2f2",
        dark: "#202124",
      },
      secondary: {
        light: "#fafafa",
        dark: "#171717",
      },
      highlight: "#0078d4",
      text: {
        light: "#000000",
        dark: "#fbfbfb",
      },
      secondaryText: {
        light: "#94a3b8",
        dark: "#e2e8f0",
      },
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
