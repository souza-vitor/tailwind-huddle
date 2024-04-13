/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        softMagenta: "hsl(300, 69%, 71%)",
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'open': ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [],
}

