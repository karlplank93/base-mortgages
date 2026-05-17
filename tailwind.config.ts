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
        // Soft Cream    #F7F5F2   page background
        // ──────────────────────────────────────────────

        // `navy` token = primary dark (headings, dark backgrounds)
        navy: {
          DEFAULT: '#0F4C4F',
          deep:    '#0A3537',
          light:   '#2A6E72',
        },

        // `teal` token = primary brand → Deep Teal
        teal: {
          DEFAULT: '#0F4C4F',
          dark:    '#0A3537',
          darker:  '#062528',
          light:   '#C7E8DE',
          mid:     '#5B9799',
        },

        // Brand-specific named tokens
        mint:    { DEFAULT: '#C7E8DE' },
        coral:   { DEFAULT: '#FF8A5B', dark: '#E8723E' },
        sage:    { DEFAULT: '#A8B8B2' },
        charcoal:{ DEFAULT: '#24323D' },
        offwhite:{ DEFAULT: '#F7F5F2' },
        cream:   { DEFAULT: '#F7F5F2', dark: '#E8E4DE' },

        border: {
          DEFAULT: '#E5E7EB',
        },

        bg: {
          DEFAULT: '#FFFFFF',
          light:   '#F7F5F2',
          soft:    '#C7E8DE',
          trust:   '#F7F5F2',
        },

        text: {
          primary:   '#24323D',
          secondary: '#6B7280',
          muted:     '#A8B8B2',
        },

        // Backwards-compat aliases
        sand:   { DEFAULT: '#F7F5F2', dark: '#E8E4DE' },
        slate:  '#24323D',
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
