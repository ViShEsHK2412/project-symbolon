/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        brand: {
          amber: "#d97736",
          grey: "#e0e0e0",
          border: "#1a1a1a",
          muted: "#666666",
          dark: "#0a0a0a",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      letterSpacing: {
        widest: ".25em",
        ultra: ".5em",
      },
    },
  },
  plugins: [],
};
