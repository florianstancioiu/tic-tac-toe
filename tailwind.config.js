/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#1A2A33',
        'semi-dark-navy': '#1F3641',
        'light-yellow': '#F2B137',
        'light-yellow-shadow': '#CC8B13',
        'light-blue': '#31C3BD',
        'light-blue-shadow': '#118C87',
        silver: '#A8BFC9',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'box-light-yellow': 'inset 0px -8px 0px 0px #CC8B13',
        'box-light-blue': 'inset 0px -8px 0px 0px #118C87',
        'box-dark-navy': 'inset 0px -8px 0px 0px #10212A',
        'box-silver': 'inset 0px -4px 0px 0px #6B8997',
      },
    },
  },
  plugins: [],
};
