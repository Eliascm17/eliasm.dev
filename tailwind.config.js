module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      dark: '#171a24',
      'button-dark': '#2d3848',
      'button-dark-hover': '#3c4b61',
      'button-light': '#edf2f6',
      'button-light-hover': '#dfe2e6'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
