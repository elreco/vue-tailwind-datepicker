/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        orange: colors.orange,
        "light-blue": colors.sky,
        "vtd-primary": colors.emerald,
        "vtd-secondary": colors.coolGray,
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      opacity: {
        85: "0.85",
      },
    },
  },
  plugins: [],
};
