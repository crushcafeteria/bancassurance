import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      colors: {
        'earth': "#3C2420",
        'banana': "#FFBA00",
        'strawberry': "#F5F0F0",
        'strawberry2': "#F9EBE9",
      }
    },
  },
  plugins: [],
};
export default config;
