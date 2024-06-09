import type {Config} from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2.625rem',
        lg: '3.25rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    extend: {
      colors: {
        primary: '#1985A1',

        error: '#D13604',

        'on-background-light': '#000000',
        'on-background-dark': '#FFFFFF',
        'secondary-text': '#848A86',

        'background-light': '#F8F8F8',
        'background-dark': '#000000',
      },
      fontFamily: {
        'lora': ['Lora', ...defaultTheme.fontFamily.serif],
        'dm-sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ['0.75rem', '1.25rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.25rem'],
        lg: ['1.125rem', '1.375rem'],
        xl: ['1.25rem', '1.5rem'],
        '1.5xl': ['1.375rem', '1.625rem'],
        '2xl': ['1.5rem', '1.75rem'],
      },
    },
  },
  plugins: [],
};
export default config;
