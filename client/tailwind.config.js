/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background': '#4D4365',
      'white': '#ffffff',
      'pink': '#B100DB',
      'magenta': '#A83681',
      'purple': '#880091',
      'light pink': '#FA00B4',
    },
    extend: {
      fontFamily: {
        Comfortaa:["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
}