/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ringWidth: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
