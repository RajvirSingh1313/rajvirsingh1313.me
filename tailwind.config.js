/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F4FCFF",
        activeBlue: "#25C8FF",
        lightBlue: "#121A46",
        midBlue: "#0B1192",
        darkBlue: "#070332",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
