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

    boxShadow: {
      custom: "0 2px 10px 0 #161515",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
        mono: ["var(--font-roboto-mono)"],
      },
      animation: {
        load: "load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      keyframes: {
        load: {
          "0%": { left: "-150px" },
          "100%": { left: "100%" },
        },
      },
      backgroundImage: (theme) => ({
        "gradient-custom":
          "linear-gradient(to right, transparent 0%, #242425 50%, transparent 100%)",
      }),
    },
  },
  plugins: [],
};
export default config;
