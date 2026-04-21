/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-lime': '#ADFF2F',
        'cyber-pink': '#FF00FF',
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}