/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily:{
        Inter:['Inter', 'sans-sarif'],
        InterItalic:['InterItalic','sans-sarif'],
      },
      keyframes: {
        bouncex: {
          '0%, 100%': { transform: 'translateX(-50%);' },
          '50%': { transform: 'translateY(0);' },
        }
      },
      animation: {
        bouncex: 'bouncex 1.5s ease-in-out infinite',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      }
    },
  },
  plugins: [],
}

