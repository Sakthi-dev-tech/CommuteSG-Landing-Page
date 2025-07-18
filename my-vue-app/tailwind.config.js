/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#a5b4fc',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#10b981',
          light: '#86efac',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#f59e0b',
          light: '#fcd34d',
          dark: '#d97706',
        },
        pastel: {
          pink: '#fce7f3',
          blue: '#dbeafe',
          green: '#d1fae5',
          purple: '#e9d5ff',
          yellow: '#fef3c7',
          orange: '#fed7aa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
