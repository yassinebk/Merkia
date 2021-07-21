const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Playfair Display', 'sans-serif'],
      sans: ['Inter', 'sans-serif']
    },

    colors: {
      transparent: '#transparent',
      primary_100: '#DEA277',
      primary_200: '#E0A982',
      primary_300: '#EDD8CA',
      primary_400: '#E6BDA1',
      secondary_100: '#514E4E',
      secondary_200: '#524444',
      secondary_300: '#A39D9D',
      secondary_400: '#423B3B',
      bg: '#F5EEE9',
      contrast: '#E0762B',
      fadedgray: 'rgba(81, 78, 78, 0.75)'
    },
    filter: {
      grad_light: 'linear-gradient(180deg, #F3ECE7 0%, #FAF8F8 100%)',
      grad_better:
        ' linear-gradient(180deg, rgba(245, 238, 233, 0.99) 0%, rgba(255, 246, 239, 0.994583) 81.25%, #F5EEE9 100%)',
      grad_icons: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
    },
    extend: {
      backgroundImage: (theme) => ({
        'mb-landing': "url('./assets/landing-bg.png')"
      }),

      screens: {
        xs: '360px',
        ...defaultTheme.screens
      },
      scale: ['hover', 'group-hover']
    }

  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ]
}
