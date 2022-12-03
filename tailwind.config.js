/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#32D320",
        grey: "#ABABAB",
        gray: "#C4C4C4",
        putih: "#F1F3F5",
      },
      fontFamily: {
       
      },
    },
  },
  plugins: [],
};
