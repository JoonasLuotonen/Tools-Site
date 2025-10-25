
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          blue: "#D6EEFF", // Light blue section background
          yellow: "#FFE36E",
          gray: "#F4F5F6"
        }
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'Helvetica', 'Arial'],
        body: ['ui-sans-serif', 'system-ui', 'Inter', 'Helvetica', 'Arial']
      },
      borderRadius: {
        '2xl': '1.5rem'
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [],
}
