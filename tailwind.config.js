/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns :{
        'auto_1fr' : 'auto 1fr'
      }
    },
  },
  plugins: [],
}