import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        "2xl": "1535px",
        xl: "1279px",
        lg: "1023px",
        sm: "639px",
        md: "767px",
      },
    },

    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "836px" },
      sm: { max: "639px" },
      exsm: { max: "380px" },
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
