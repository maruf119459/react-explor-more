/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // add --> node:true, --> in .eslintrc.cjs file at 'env' part
}

