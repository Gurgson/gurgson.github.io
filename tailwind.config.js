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
      keyframes: {
        loadingCircle: {
          "0%": {
            transform: "scale(0,0)",
            left: 0
          },
          "100%": {
            transform: "scale(1,1)",
            left: "100%"
          }
        }
      },
      animation: {
        "loadingCircle": "loadingCircle 500ms linear 0ms infinite"
      }
      
    },
  },
  plugins: [],
}

