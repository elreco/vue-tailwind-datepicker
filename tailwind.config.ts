import type { Config } from 'tailwindcss';
import { cyan, fuchsia, gray, lime, orange, sky } from 'tailwindcss/colors';
import { fontFamily } from 'tailwindcss/defaultTheme';
import TailwindFormPlugin from '@tailwindcss/forms'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./docs/**/*.{js,ts,vue,md}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyan,
        fuchsia,
        lime,
        orange,
        "light-blue": sky,
        "vtd-primary": sky,
        "vtd-secondary": gray,
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      opacity: {
        85: "0.85",
      },
    },
  },
  plugins: [TailwindFormPlugin()],
} satisfies Config;
