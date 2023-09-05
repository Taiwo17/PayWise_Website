/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blackish: '#131313',
        blueish: '#0072C6',
        blackOpacity: 'rgba(19, 19, 19, 0.7)',
        greyish: 'rgba(89, 89, 89, 0.8)',
      },
      backgroundImage: {
        'hero-image': "url('/public/img/hero_image.png')",
        parallex: "url('/public/img/parrallex.png')",
        'mobile-view': "url('/public/img/front_view.png')",
        'bg-para': "url('/public/img/bg_para.png')",
      },
      content: {
        'star-heading': "url('/public/img/ph_star-four-fill.svg')",
      },
    },
  },
  plugins: [],
}
