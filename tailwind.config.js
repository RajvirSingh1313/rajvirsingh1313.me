module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#F4FCFF",
        blue: "#25C8FF",
        lightPurple: "#121A46",
        purple: "#0B1192",
        black: "#070332",
        darkerBlack: "#091D45",
      },
      fontFamily: {
        'body': "Red Hat Display"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
