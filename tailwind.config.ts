import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
      white: "#fff",
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
