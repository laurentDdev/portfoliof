/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'myligth': '#FEFAE0',
        'mydark': '#0D1321',
        'myorange': '#E76F51'
      },
      fontFamily: {
        'poppins': 'Poppins',
        'league' : 'League Spartan'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
  ],
}

