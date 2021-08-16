module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#333333',
        'ml-yellow': '#ffe600',
        'ml-blue': '#3483fa',
        'ml-gray': '#999999',
        'ml-light-gray': '#eeeeee',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
