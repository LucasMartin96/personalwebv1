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
        navy: "#121212",
        "light-navy": "#2D2D2D",
        "lightest-navy": "#333333",
        green: "#64FFDA",
        slate: "#E5E5E5",
        "light-slate": "#BBBBBB",
        "lightest-slate": "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;
