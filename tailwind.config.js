/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat'],
        "Figtree": ['Figtree', 'sans-serif']
      }
    },
  },
  plugins: [],
}