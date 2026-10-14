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
        porcelain: "#F3F0E8",
        stone: "#E2DDD2",
        charcoal: "#292925",
        "charcoal-muted": "#525048",
        copper: "#9C6246",
        "copper-light": "#B87A5C",
        "copper-pale": "#CFA28C",
        "warm-grey": "#A4A095",
        "paper-tint": "#FAF8F3",
        "lab-dark": "#181816",
        "ivory-light": "#FAF9F5",
      },
      fontFamily: {
        display: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        tactile: "0 1px 3px rgba(41, 41, 37, 0.05), 0 1px 2px rgba(41, 41, 37, 0.03)",
        elevated: "0 10px 25px -5px rgba(41, 41, 37, 0.05), 0 8px 10px -6px rgba(41, 41, 37, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
