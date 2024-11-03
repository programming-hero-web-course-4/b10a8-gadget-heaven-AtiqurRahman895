/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '5%',
        sm: '1rem',
      },
    },
    extend: {
      // screens: {
      //   sm: "600px",
      //   md: "700px",
      //   lg: "1000px",
      //   xl: "1250px",
      // },
      fontFamily:{
        'manrope':["Manrope", 'sans-serif'],
      },
      colors: {
        'custom-orange':'#EC7A3B',
        'custom-half-orange': 'rgba(236, 121, 59, 0.2)',
        'custom-black': 'rgba(19,19,19,0.7)',
        'white':'#ffffff',
        'custom-ash': '#ddd9d9',
        'custom-red':'#F14749',
        'custom-yellow': '#E7FE29',
        
      },
    },
  },
  plugins: [daisyui,],
  daisyui: {
    themes: ["light", "dark", "lemonade"], // or custom themes
  },
}