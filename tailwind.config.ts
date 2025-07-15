// tailwind.config.ts
import { type Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        nonWhite: "var(--nonWhite)",
        lightGray: "var(--lightGray)",
        green: "var(--green)",
        teal: "var(--teal)",
        marine: "var(--marine)",
        deepMarine: "var(--deepMarine)",
        darkGray: "var(--darkGray)"
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        header: 'var(--font-header)',
        alt: 'var(--font-playfair)',
      },
    },
    screens: {
      'mobile': '640px',
      'tablet': '1024px',
      'desktop': '1280px',
    }
  },
  content: [
    'src/app/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};

export default config;
