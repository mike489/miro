/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4262FF",
        secondary: "#050038",
        pr: "#F2F4F8",
      },
    },
  },
  plugins: [],
};
