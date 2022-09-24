/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '500px',
      md: '800px',
      lg: '960px',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
