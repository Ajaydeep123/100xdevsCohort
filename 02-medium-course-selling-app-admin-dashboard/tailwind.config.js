/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'powderwala':'#DEDCD3',
        'acchaSafed':"#FAF9F6",
        'acchaBlack':"#0E0E0D",
      },
      fontFamily:{
        'headerWala':['Bebas Neue', 'sans-serif'],
        'hindi': ['Noto Serif Devanagari','Great Vibes'],
        'heroSection':['Patua One'],
        'bodySection':['Poppins'],
      },
    },
  },
  plugins: [],
}