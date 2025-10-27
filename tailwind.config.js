/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { black: "#0A0A0A", blue: "#D6EEFF", yellow: "#FFE36E", gray: "#F4F5F6" },
        "brand-yellow": "#FFE36E",
        "brand-blue":   "#D6EEFF",
      },
      fontFamily: {
        display: ["Bebas Neue","ui-sans-serif","system-ui","Helvetica","Arial"],
        body:    ["Special Gothic","ui-sans-serif","system-ui","Helvetica","Arial"],
      },
      borderRadius: { DEFAULT: "1rem", xl: "1rem", "2xl": "1.5rem" },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.06)" },
    },
  },
  plugins: [],
};
