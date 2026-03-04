import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1e2d3d',
          deep: '#141f2b',
          light: '#2a3f55',
        },
        teal: {
          DEFAULT: '#2ab5a4',
          dark: '#1e9183',
          light: '#e6f7f5',
        },
        cream: {
          DEFAULT: '#f5f2ed',
          dark: '#ede9e2',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
