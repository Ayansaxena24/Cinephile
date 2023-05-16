/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    @tailwind base;
@tailwind components;
@tailwind utilities;
  },
  plugins: [],
}

