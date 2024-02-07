/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {       
      black:'#2C3E50',
    },   
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Sans-serif']
      },
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}

