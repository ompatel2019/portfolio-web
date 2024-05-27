/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./script/*.js"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      backgroundImage: {
        // Define background images if needed
      },
      backgroundColor: {
        'bg': '#F3F3F3',
        'dark-bg': '#02040a', // Dark mode background color
      },
      textColor: {
        'dark-text': '#F7FAFC', // Dark mode text color
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
