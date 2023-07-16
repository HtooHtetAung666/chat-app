/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#5e5566',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave"],
  }
}