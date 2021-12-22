module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Karla': ['Karla', 'sans-serif']
      },
      colors: {
        'Ciano': '#2AB2AF',
        'VerdeVibrante': '#C0DF34',
        'CinzaClaro': '#E5EFF5',
        'CinzaAzul': '#98A6BD',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
