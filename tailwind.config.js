/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { maroon: "#7A0F14", gold: "#C5A880", cream: "#FFFCF7" }
    }
  },
  plugins: [],
}