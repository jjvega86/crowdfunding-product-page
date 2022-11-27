/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "cyan-light": "hsl(176, 50%, 47%)",
      "cyan-dark": "hsl(176, 72%, 28%)",
      black: "hsl(0, 0%, 0%)",
      "gray-dark": "hsl(0, 0%, 48%)",
      "gray-light": "#ECECEC",
      white: "#FFFFFF",
    },
    fontFamily: {
      commissioner: ["Commissioner", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
