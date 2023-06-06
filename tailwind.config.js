/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Comfortaa"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
