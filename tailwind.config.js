/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        text: "#383838",
        background: "#fafcfd",
        primary: "#3b7fce",
        secondary: "#83b3ea",
        accent: "#4794ed",
      },
    },
  },
  plugins: [require("daisyui")],
};
