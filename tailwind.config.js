/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0px 40px 10px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        xe: "10px",
      },
    },
  },
  plugins: [],
};
