module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ml-yellow': '#fff159',
        'ml-blue': '#3483fa',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
