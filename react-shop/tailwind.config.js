module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '70%': '70%',
        '16': '4rem',
      },
      colors: {
        'corn-silk': '#FFF8DC',
        'cool-green':'#2C5364',
        'cool-dark':'#0F2027',
        'cool-darker-green':'#203A43',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
