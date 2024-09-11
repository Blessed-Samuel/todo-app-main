/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Src/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },

      fontSize: {
        'Custom-font': '18px'
      },

      fontWeight: {
        'w-400': '400',
        'w-700': '700'
      },

      colors: {
        'Bright-Blue': 'hsl(220, 98%, 61%)'
      },

      backgroundImage: {
        'gradient-light': 'url("../images/bg-desktop-light.jpg")',
        'gradient-dark': 'url("../images/bg-desktop-dark.jpg")'
      },

      letterSpacing: {
        'todo': '0.3em'
      },

      boxShadow: {
        'custom': '0 10px 90px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}

