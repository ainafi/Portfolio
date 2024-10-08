/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"#000319",
        rose:"#E3007E",
        blue:"#4C3BCF"
      },
      fontFamily:{
        poppins:"poppins",
        conthrax:"conthrax",
        monumented:"monumented"
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        move: "move 5s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  plugins: [],
}