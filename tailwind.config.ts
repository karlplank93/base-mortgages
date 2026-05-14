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
        // ──────────────────────────────────────────────
        // Base Mortgages brand palette
        // Primary Teal   Deep Teal     #006D77
        // Premium Mint   Soft Mint     #D6E7E2
        // Charcoal Text  Dark Slate    #24323D
        // Background     Off White     #F8FAF9
        // Secondary      Sage Grey     #A8B8B2
        // ──────────────────────────────────────────────

        // `navy` token = primary dark (headings, dark backgrounds) → Dark Slate
        navy: {
          DEFAULT: '#24323D',   // Dark Slate (Charcoal Text)
          deep:    '#1a252e',   // slightly darker for gradient depth
          light:   '#3a4a58',   // slightly lighter for hover/contrast
        },

        // `teal` token = primary brand accent → Deep Teal
        teal: {
          DEFAULT: '#006D77',   // Deep Teal (Primary Teal)
          dark:    '#005761',   // hover/active
          darker:  '#003e45',
          light:   '#D6E7E2',   // Soft Mint (Premium Mint)
          mid:     '#4a9fa6',   // mid teal
        },

        // Brand-specific named tokens
        mint:     { DEFAULT: '#D6E7E2' },   // Soft Mint
        sage:     { DEFAULT: '#A8B8B2' },   // Sage Grey
        charcoal: { DEFAULT: '#24323D' },   // Dark Slate
        offwhite: { DEFAULT: '#F8FAF9' },   // Off White

        border: {
          DEFAULT: '#E5E7EB',
        },

        bg: {
          DEFAULT: '#FFFFFF',
          light:   '#F8FAF9',   // Off White
          soft:    '#D6E7E2',   // Soft Mint
          trust:   '#F8FAF9',   // Off White
        },

        text: {
          primary:   '#24323D', // Dark Slate
          secondary: '#6B7280',
          muted:     '#A8B8B2', // Sage Grey
        },

        // Backwards-compat aliases — redirected to brand palette
        sand:   { DEFAULT: '#F8FAF9', dark: '#D6E7E2' },
        cream:  { DEFAULT: '#F8FAF9', dark: '#D6E7E2' },
        slate:  '#24323D',
        // Old orange CTA → redirected to Deep Teal so existing code stays on-brand
        orange: { DEFAULT: '#006D77', dark: '#005761' },
      },
      fontFamily: {
        sans:    ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        cta:  '0 8px 24px rgba(0,109,119,0.28)',  // Deep Teal shadow
        card: '0 4px 16px rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
};
export default config;
