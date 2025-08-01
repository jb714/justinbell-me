/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        accent: {
          500: '#a855f7',
          600: '#9333ea',
        },
        contrast: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        rose: {
          500: '#f43f5e',
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706',
        },
        coral: {
          500: '#f43f5e',
        },
        gray: {
          100: '#f3f4f6',
          300: '#d1d5db',
          600: '#4b5563',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 