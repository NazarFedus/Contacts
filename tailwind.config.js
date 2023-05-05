/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      cairo: ['Сairo', 'sans-serif'],
      opensans: ["Open Sans", 'sans-serif'],
     },
    extend: {
      colors: {
        'default-text': 'var(--default-color)'
      }
    },
  },
  plugins: [],
}