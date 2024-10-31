/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Rubik', 'sans-serif']
      },
      colors: {
        'custom-blue': "#0956AF",
        'custom-black': "#212529"
      }
    },
  },
  variants: {
    extend: {
      content: ['before', 'after'],
    },
  },
  plugins: [],
}