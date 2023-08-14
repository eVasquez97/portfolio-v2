import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "primary": {
        light: "#fbfbfb",
        dark: "#020617", 
      },
      "secondary": {
        light: "#f4f4f5",
        dark: "#1e293b",
      },
      "highlight": "#65a30d",
      "text": {
        light: "#000000",
        dark: "#fbfbfb"
      },
      "secondaryText":{
        light: "#94a3b8",
        dark: "#e2e8f0"
      }
    },
    extend: { },
  },
  plugins: [],
}
export default config
