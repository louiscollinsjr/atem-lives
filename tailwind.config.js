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
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        wobble: 'wobble 0.2s ease-in-out',
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        popins: ['Poppins', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        space: ['Space Mono', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
}

