/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // Головний HTML файл
    "./src/**/*.{js,ts,jsx,tsx,vue}" // Всі файли у src папці з потрібними розширеннями
  ],
  theme: {
    extend: {   colors: {
      'custom-blue': '#3485C8',
    },},
  },
  plugins: [],
}

