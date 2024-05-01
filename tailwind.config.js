/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit', // Just-in-Time mode for faster build times (optional but recommended)
  purge: [
    './index.html', // Path to your HTML files
    './src/**/*.{vue,js,ts,jsx,tsx}', // Path to your Vue or React components
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coral: '#E86C4F',
        pink: '#F4A2AC',
        'light-green': '#BFDDCE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
