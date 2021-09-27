module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#43526B',
        highlight: '#0083aa',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
