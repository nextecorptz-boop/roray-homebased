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
        navy: { DEFAULT: '#0B2447', deep: '#061632', light: '#1A3A6B' },
        roray: { green: '#0E8A3E', greendark: '#0A6E31', greenlight: '#1FA854' },
        accent: { red: '#D72638', reddark: '#A81E2B' },
        bone: { DEFAULT: '#F7F5F0', warm: '#EFEBE2', cool: '#FAFAFA' },
        ink: { DEFAULT: '#0A0E1A', soft: '#3D4659', muted: '#6B7280' }
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-opensans)', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
