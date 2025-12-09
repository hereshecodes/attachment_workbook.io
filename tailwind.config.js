/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index-react.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        connection: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        autonomy: {
          500: '#7c3aed',
          600: '#6d28d9',
        },
        balanced: {
          500: '#10b981',
          600: '#059669',
        },
        mixed: {
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
