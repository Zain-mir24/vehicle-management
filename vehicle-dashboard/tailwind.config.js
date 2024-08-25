/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0465eb",
          500: "#a9c8ff",
          100: "#ebf2fa",
        },
        black: "#323232",
        grey: {
          900: "#666666",
          700: "#999999",
          600: "#dcdbdd",
          500: "#cccccc",
          400: "#e0e0e0",
          300: "#f3f4f8",

          100: "#fbfcfc",
        },
        secondary: {
          yellow: "#fee468",
          red: "#cd4a5e",
          "light-red": "#faedef",
          "light-green": "#c1f095",
          "dark-green": "#1c816d",
          "medium-green": "#00a779",
          green: "#39D2C0",
        },
      },
      backgroundImage: {
        bluegradient: "linear-gradient(to right, #0565ea 0%, #03c4fa 100%)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
