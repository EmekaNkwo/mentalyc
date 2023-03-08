/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    screens: {
      xs: "281px",
      xsm: "511px",
      max: "900px",
      ...defaultTheme.screens,
      smax: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
