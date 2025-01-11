/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      colors: {
        antarctica: '#797979',
        'south-america': '#73b790',
        oceania: '#7990c5',
        'north-america': '#f17f90',
        europe: '#77c0d8',
        asia: '#ffc273',
        africa: '#fbcbb7',
        gray: '#A0A0A0',
        background: '#F5F5F5',
        navy: '#071C2E',
      },
    },
  },
  plugins: [],
};
