import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        textPrimary: "var(--textPrimary)",
        alert: "var(--alert)",
        success: "var(--success)",
        warning: "var(--warning)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["winter"],
          primary: "#1A3D5E",
        },
      },
    ],
  },
};
export default config;
