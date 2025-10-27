/** @type {import('tailwindcss').Config} */
module.exports = {
  // Make sure Tailwind scans all relevant files for class names
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Your custom brand palette
        brand: {
          black: "#0A0A0A",
          blue: "#D6EEFF", // Light blue section background
          yellow: "#FFE36E",
          gray: "#F4F5F6",
        },
        // Optional direct shorthands (so you can use bg-brand-yellow, etc.)
        "brand-yellow": "#FFE36E",
        "brand-blue": "#D6EEFF",
      },

      fontFamily: {
        display: [
          "Bebas Neue",
          "ui-sans-serif",
          "system-ui",
          "Helvetica",
          "Arial",
        ],
        body: [
          "Special Gothic",
          "ui-sans-serif",
          "system-ui",
          "Helvetica",
          "Arial",
        ],
      },

      borderRadius: {
        DEFAULT: "1rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.06)",
      },
    },
  },

  plugins: [],
};
