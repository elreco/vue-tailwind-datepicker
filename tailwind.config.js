/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    "./docs/**/*.{js,ts,vue,md}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        orange: colors.orange,
        "light-blue": colors.sky,
        "vtd-primary": colors.sky,
        "vtd-secondary": colors.gray,
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      opacity: {
        85: "0.85",
      },
    },
  },
  prefix: "tw-",
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
