/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    colors: {
      light: {
        backgroundColor: "#fafafa",
        elementsColor: "#ffffff",
        textColor: "#111517",
      },
      dark: {
        backgroundcolor: "#202c37",
        elementscolor: "#2b3945",
        textcolor: "#ffffff",
      },
    },
  },
  plugins: [],
};
