/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        custom: ['Rubik', 'sans-serif']
      },
      colors: {
        'custom-blue': "#0956AF",
        'custom-black': "#212529",
        "gray-back": "#F7F7F7",
        dark: {
          background: '#1A1C1E',
          card: '#242628',
          secondary: '#2A2D30',
          text: {
            primary: '#FFFFFF',
            secondary: '#E0E0E0',
            tertiary: '#A0A0A0',
          },
          primary: {
            green: '#2E855A',
            blue: '#1E40AF',
            red: '#DC2626',
            yellow: '#D97706',
          },
          border: '#3F3F46',
          divider: '#27272A',
        }
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