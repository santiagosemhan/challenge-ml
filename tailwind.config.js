module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ml-yellow': '#fff159',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
