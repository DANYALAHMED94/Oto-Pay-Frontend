/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "425px",
        xxsm: "375px",
        xl: "1440px",
        sxl: "1366px",
        xlg: "1280px",
        lg: "1024px",
        xxl: "1920px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
