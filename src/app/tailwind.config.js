/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2ba546',
          light: '#34ae15',
          dark: '#2db54d',
          hover: '#2db54d',
        },
        green: {
          50: '#f0fdf4',
          500: '#2ba546',
          600: '#34ae15',
          700: '#2db54d',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f4d03f',
        },
      },
      fontFamily: {
        futura: ['FuturaPT', 'Arial', 'sans-serif'],
        sans: ['Montserrat', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'green': '0px 12px 30px 0px rgba(63,166,15,0.4)',
        'card': '0px 4px 20px rgba(0, 0, 0, 0.08)',
        'popup': '0px 0px 50px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'large': '15px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}