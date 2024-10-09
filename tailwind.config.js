/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#6B7280',
          foreground: '#ffffff',
        },
        background: '#0f172a',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}