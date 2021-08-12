module.exports = {
  purge:  [
    "./components/**/*.js", 
    "./pages/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Titillium Web"']
    },
    extend: {
      colors: {
        rose: '#F05E7B'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
