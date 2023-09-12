/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        desktop_image : "url(./desktop.jpg)",
      }
    },
  },
  plugins: [],
}