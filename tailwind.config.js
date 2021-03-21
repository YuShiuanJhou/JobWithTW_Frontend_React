// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cyan-50': '#ecfeff',
        'cyan-100': '#cffafe',
        'cyan-200': '#a5f3fc',
        'cyan-300': '#67e8f9',
        'cyan-400': '#22d3ee',
        'cyan-500': '#06b6d4',
        'cyan-600': '#0891b2',
        'cyan-700': '#0e7490',
        'cyan-800': '#155e75',
        'cyan-900': '#164e63'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}