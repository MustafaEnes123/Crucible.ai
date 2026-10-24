/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'Consolas', 'monospace'],
      },
      colors: {
        primary: '#FDC800',
        secondary: '#432DD7',
        success: '#16A34A',
        warning: '#D97706',
        danger: '#DC2626',
        night: '#1C293C',
        surface: 'var(--surface)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        soft: 'var(--soft)',
        accent: 'var(--accent)',
        'primary-soft': 'var(--primary-soft)',
        'secondary-soft': 'var(--secondary-soft)',
        'success-soft': 'var(--success-soft)',
        'warning-soft': 'var(--warning-soft)',
        'danger-soft': 'var(--danger-soft)',
      },
      boxShadow: {
        'nb-sm': '2px 2px 0 0 var(--ink)',
        nb: '4px 4px 0 0 var(--ink)',
        'nb-lg': '6px 6px 0 0 var(--ink)',
      },
    },
  },
  plugins: [],
};
