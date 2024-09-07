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
        'gradient-custom': 'url("../images/bg-desktop-light.jpg")'
      },

      letterSpacing: {
        'todo': '0.3em'
      }
    },
  },
  plugins: [],
}

