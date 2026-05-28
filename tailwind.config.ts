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
        navy: { DEFAULT: '#0B2447', deep: '#0B2447', light: '#1A3A6B' },
        roray: { green: '#2E7D4F', greendark: '#215A38', greenlight: '#3C9D63' },
        accent: { red: '#C0392B', reddark: '#962D22' },
        bone: { DEFAULT: '#FAF9F7', warm: '#F5F0E8', cool: '#FAF9F7' },
        ink: { DEFAULT: '#0A0E1A', soft: '#4A5568', muted: '#6B7280' },
        gold: { DEFAULT: '#D4AF37' }
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-opensans)', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
