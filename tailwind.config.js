/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({})
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 xl:max-w-[87.5rem]": {},
        },
        ".standar-button": {
          "@apply p-2 border": {},
        },
      })
      addUtilities({})
    }),
  ],
}
