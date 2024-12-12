/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66",
        secondary: "#191A23",
        tertiary: "#FEFEFE",
      },
      fontFamily: {
        primary: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
