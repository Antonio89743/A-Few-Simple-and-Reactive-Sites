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
        purple_one: 'rgba(48, 44, 66, 1)', 
        purple_two: 'rgba(64, 58, 95, 1)', 
        purple_three: 'rgba(33, 30, 46, 1)', 
        purple_four: 'rgba(129, 118, 175, 1)', 
        purple_five: 'rgba(192, 183, 232, 1)', 
        icon_color: 'rgba(52, 48, 69, 1)',
        image_background: 'rgba(163, 163, 163, 1)',
      },
      borderRadius: {
        border_image_home: '100px, 100px, 100px, 240px',
        border_image_about: '60px, 140px, 60px, 140px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #343045, #C0B7E8, #8176AF, #343045)',
      },
    }
  },
  plugins: [],
}