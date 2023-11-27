/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'theBlue': '#78A1BB',
        'theDarkBlue': '#283044',
        'theOffWhite' : '#EBF5EE',
        'theLightBrown' : '#BFA89E',
        'theDarkBrown' : '#8B786D'
      }
    },
  },
  plugins: [],
}

