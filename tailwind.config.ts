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
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          'from': { opacity: '0', transform: 'translateX(20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeUp: 'fadeUp 0.5s ease-out forwards',
        fadeDown: 'fadeDown 0.5s ease-out forwards',
        fadeLeft: 'fadeLeft 0.5s ease-out forwards',
        fadeRight: 'fadeRight 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
