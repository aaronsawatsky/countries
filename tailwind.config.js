/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      colors: {
        rurikon: {
          50: '#ebedef',
          100: '#d8dbdf',
          200: '#b3b9c1',
          300: '#8c95a1',
          400: '#697381',
          500: '#4a515b',
          600: '#3b4149',
          700: '#2b3035',
          800: '#1e2125',
          900: '#0e0f11',
          950: '#07080a',
        },
        'rurikon-border': '#d8dbdfb3',
      },
    },
  },
  plugins: [],
};
