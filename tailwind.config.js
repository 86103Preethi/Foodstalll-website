/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
    'nunito':['nunito','sans-serif'],
    'Myfont':[' "My font"', 'serif']
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],

}

