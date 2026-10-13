/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060a12',
          900: '#0c1322',
          850: '#121b2f',
          800: '#1a2640',
          750: '#233252',
        },
        shield: {
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
