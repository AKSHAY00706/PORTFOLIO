import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ["Monument Extended", "sans-serif"],
        cabinet: ["Cabinet Grotesk", "sans-serif"],
        general: ["General Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        accent: {
          red: "#c0392b",
          "red-bright": "#e74c3c",
          silver: "#b0b0ac",
          cyan: "#64c8dc",
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
