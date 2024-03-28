/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202C33',
        secondary: '#202C33',
        'on-primary': '#AEBAC1',
        'on-secondary': '#E9EDEF',
        'notify': '#00A884',
        'border': '#0B141A',
        'select': '#2A3942'
      },
    },
  },
  plugins: [require("daisyui")],
};
