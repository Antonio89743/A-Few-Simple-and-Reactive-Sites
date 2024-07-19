/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "public/*.{html,js}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        purple_one: 'rgb(122, 25, 243, 1)', 
        purple_two: 'rgb(169, 82, 243, 1)',
        black: 'black',
        white: 'white',
        gray: 'gray'
      },
      aspectRatio: {
      '343/290': '343 / 290',
      },
    }
  },
  plugins: [],
}