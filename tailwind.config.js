/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        first : "rgb(218 203 190)" ,
        second : "#f3f3f3" , 
        title : "rgb(131 85 49)"
      },
    },
  },
  plugins: [daisyui],
}

