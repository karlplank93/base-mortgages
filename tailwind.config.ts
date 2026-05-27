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
        // Deep Teal     #0F4C4F   primary brand
        // Mint          #C7E8DE   light tints
        // Coral Orange  #FF8A5B   CTAs / accents
        // Warm Linen    #F7F4EE   page background
        // ──────────────────────────────────────────────

        // `navy` token = primary dark (headings, dark backgrounds)
        navy: {
          DEFAULT: '#006D77',
          deep:    '#005A63',
          light:   '#2A6E72',
        },

        // `teal` token = primary brand → Deep Teal
        teal: {
          DEFAULT: '#006D77',
          dark:    '#005A63',
          darker:  '#062528',
          light:   '#C7E8DE',
          mid:     '#5B9799',
        },

        // Brand-specific named tokens
        mint:    { DEFAULT: '#C7E8DE' },
        coral:   { DEFAULT: '#FF8A5B', dark: '#E8723E' },
        honey:   { DEFAULT: '#C9A063', dark: '#A6803F' },
        sage:    { DEFAULT: '#A8B8B2' },
        charcoal:{ DEFAULT: '#1F2933' },
        offwhite:{ DEFAULT: '#F7F4EE' },
        cream:   { DEFAULT: '#F7F4EE', dark: '#E8E4DE' },

        border: {
          DEFAULT: '#E5E7EB',
        },

        bg: {
          DEFAULT: '#FFFFFF',
          light:   '#F7F4EE',
          soft:    '#C7E8DE',
          trust:   '#F7F4EE',
        },

        text: {
          primary:   '#1F2933',
          secondary: '#6B7280',
          muted:     '#A8B8B2',
        },

        // Backwards-compat aliases
        sand:   { DEFAULT: '#F7F4EE', dark: '#E8E4DE' },
        slate:  '#1F2933',
        // Old orange CTA → keep as coral
        orange: { DEFAULT: '#FF8A5B', dark: '#E8723E' },
      },
      fontFamily: {
        sans:    ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-source-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        cta:  '0 8px 24px rgba(255,138,91,0.28)',
        card: '0 4px 16px rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
};
export default config;
