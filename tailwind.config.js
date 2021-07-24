const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
      },
    },
    extend: {
      colors: {
        primary: '#bad3dc',
        secondary: '#833928',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.transitable': {
          '@apply transition-all duration-300': {},
        },
      })
    }),
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
}
