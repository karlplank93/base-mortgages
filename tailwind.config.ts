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
        // Teal = PRIMARY brand color
        teal: {
          DEFAULT: '#2ab5a4',
          dark: '#1e9183',
          darker: '#147066',
          light: '#e6f7f5',
          mid: '#b2e8e3',
        },
        // Navy = SECONDARY (footer, dark sections only)
        navy: {
          DEFAULT: '#1e2d3d',
          deep: '#141f2b',
          light: '#2a3f55',
        },
        cream: {
          DEFAULT: '#f5f2ed',
          dark: '#ede9e2',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
