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
        midnight: {
          DEFAULT: "#000000", // Deep black background
          surface: "#111111", // Matte charcoal for cards
          card: "rgba(20, 20, 20, 0.6)", // Glass effect base
          border: "rgba(255, 255, 255, 0.08)", // Subtle luxury border
        },
        luxury: {
          cyan: "#00f2fe", // Electric highlight
          gold: "#d4af37", // Premium gold
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};
export default config;