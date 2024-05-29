import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    colors: {
      orange: "#D5A02C",
      black: "#000",
      gray: "#161616",
      grayLight: "#3E3E3E",
      white: "#fff",
      divider: "#c4c4c44f",
      grayPrimary: "#6c6c6c",
    },

    extend: {
      backgroundImage: {
        "hero-pattern": "url('/main-hero.png')",
      },
    },
  },
  plugins: [],
};
export default config;
