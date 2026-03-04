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
        // Primary navy (from brand palette)
        navy: {
          DEFAULT: '#1F3A5F',
          deep: '#162d4a',
          light: '#2a4f7a',
        },
        // Accent teal (from brand palette)
        teal: {
          DEFAULT: '#27C1B7',
          dark: '#1e9990',
          darker: '#166e68',
          light: '#e8f9f8',
          mid: '#a8e8e4',
        },
        // Sand warm neutral (from brand palette)
        sand: {
          DEFAULT: '#F1E8D9',
          dark: '#e3d6c4',
        },
        // Text
        slate: '#333333',
        cream: {
          DEFAULT: '#F1E8D9',
          dark: '#e3d6c4',
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
