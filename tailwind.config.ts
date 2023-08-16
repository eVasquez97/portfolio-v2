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
        light: "#e6e6e6",
        dark: "#1c1c1c",
      },
      secondary: {
        light: "#f4f4f5",
        dark: "#242726",
      },
      highlight: "#65a30d",
      text: {
        light: "#000000",
        dark: "#fbfbfb",
      },
      secondaryText: {
        light: "#94a3b8",
        dark: "#e2e8f0",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
