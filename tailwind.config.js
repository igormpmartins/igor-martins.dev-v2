module.exports = {
  purge:  [
    "./Components/**/*.js", 
    "./pages/**/*.js",
    "./styles/**/*.css",
    "./styles/globals.css",
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
