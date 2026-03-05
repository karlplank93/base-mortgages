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
          DEFAULT: '#2BB7A9',
          dark:    '#23B5A7',
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
          DEFAULT: '#F7F9FC',
          trust:   '#F3F6FA',
        },
        text: {
          primary:   '#1A1A1A',
          secondary: '#6B7280',
        },
        // keep cream/sand aliases so old refs don't break
        sand: {
          DEFAULT: '#F1E8D9',
          dark:    '#e3d6c4',
        },
        cream: {
          DEFAULT: '#F1E8D9',
          dark:    '#e3d6c4',
        },
        slate: '#333333',
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
