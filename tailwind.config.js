/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"],
  theme: {
 extend: {
      colors: {
        'prime-blue': '#00A8E1',
      },
    },
  },
  plugins: [],
}
