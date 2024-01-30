/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tetriary: "var(--color-tetriary)",
        accent: "var(--color-accent)"
      },
      screens: {
        sc850: "850px"
      },
      // gridColumn: "repeat(5,55px)"
      
    },
  },
  plugins: [],
}

