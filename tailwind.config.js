/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'Open San', ]
    },
    extend: {
      colors: {
        'regal-blue': '#2F80ED',
        'regal-blue-hover': '#235EAC',
      },
    },
  },
  plugins: [],
}