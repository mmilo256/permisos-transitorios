/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoSlabs: ['Roboto\\ Slab', 'sans-serif']
      },
      colors: {
        primary: "#0F69C4",
        primaryHover: "#013763"
      }
    },
  },
  plugins: [],
}

