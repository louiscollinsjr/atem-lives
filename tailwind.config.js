/** @type {import("tailwindcss").Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

module.exports = {
  content: {
  files:['./src/**/*.{js,jsx,ts,tsx}', 
  './index.html'],
extract},
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        popins: ['Poppins', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        space: ['Space Mono', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
}

