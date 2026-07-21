/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        'panel-2': 'var(--panel-2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--border)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        'card-tint': 'var(--card-tint)',
        'card-tint-border': 'var(--card-tint-border)',
        'hero-grid': 'var(--hero-grid)',
        'nav-bg': 'var(--nav-bg)',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-geist)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
        'tight-sm': '-0.025em',
        wide: '0.06em',
        wider: '0.08em',
      },
    },
  },
  plugins: [],
} 