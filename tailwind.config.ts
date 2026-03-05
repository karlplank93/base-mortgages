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
          DEFAULT: '#243A5E',
          deep:    '#1B2F4A',
          light:   '#2a4f7a',
        },
        teal: {
          DEFAULT: '#27C1B7',
          dark:    '#1FA79F',
          darker:  '#1a8a7e',
          light:   '#e8f9f8',
          mid:     '#a8e8e4',
        },
        orange: {
          DEFAULT: '#FF7A3D',
          dark:    '#E8692F',
        },
        border: {
          DEFAULT: '#E6EAF0',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          light:   '#F5F7FA',
          trust:   '#F5F7FA',
        },
        text: {
          primary:   '#1A1A1A',
          secondary: '#6B7280',
        },
        // keep sand/cream so old refs don't break
        sand: {
          DEFAULT: '#F5F7FA',
          dark:    '#E6EAF0',
        },
        cream: {
          DEFAULT: '#F5F7FA',
          dark:    '#E6EAF0',
        },
        slate: '#333333',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        cta:  '0 8px 20px rgba(0,0,0,0.08)',
        card: '0 12px 30px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
export default config;
