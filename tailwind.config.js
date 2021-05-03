const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.blue,
      dark: '#171a24',
      'button-dark': '#2d3848',
      'button-dark-hover': '#3c4b61',
      'button-light': '#edf2f6',
      'button-light-hover': '#dfe2e6',
      'blockquote-dark': '#1c365d',
      'blockquote-light': '#bee4f8',
      'blockquote-border': '#3082ce'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
