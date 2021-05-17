module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "text-color": "#21243D",
        "text-light": "#8695A4",
        "button-color": "#FF6464",
        "posts-bg": "#EDF7FA"
      },
      height: {
        "7.5": "1.875rem",
        "42": "10.625rem",
        "ten": "10vh",
        "ninety": "90vh"
      },
      width: {
        "xs": "0.125rem",
        "7.5": "1.875rem",
        "42": "10.625rem",
      },
      lineHeight: {
        "15": "3.75rem"
      },
      fontSize: {
        "1.5xl": "1.375rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
