/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'gray': {
          900: '#21262d',
          background: '#0d1117',
        }
      }
    },
  },
  plugins: [],
}
