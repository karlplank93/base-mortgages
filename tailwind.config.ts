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
          DEFAULT: '#0A2E6B',
          deep:    '#071F4A',
          light:   '#1a4a8a',
        },
        teal: {
          DEFAULT: '#27C1B7',
          dark:    '#1FA79F',
          darker:  '#1a8a7e',
          light:   '#EBF9F8',
          mid:     '#a8e8e4',
        },
        border: {
          DEFAULT: '#E5E7EB',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          light:   '#F8F9FB',
          soft:    '#F3F4F6',
          trust:   '#F8F9FB',
        },
        text: {
          primary:   '#111827',
          secondary: '#6B7280',
          muted:     '#9CA3AF',
        },
        // backwards-compat aliases
        sand: { DEFAULT: '#F8F9FB', dark: '#E5E7EB' },
        cream: { DEFAULT: '#F8F9FB', dark: '#E5E7EB' },
        slate: '#374151',
        orange: { DEFAULT: '#FF7A3D', dark: '#E8692F' },
      },
      fontFamily: {
        sans:    ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        cta:  '0 8px 24px rgba(39,193,183,0.28)',
        card: '0 4px 16px rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
};
export default config;
