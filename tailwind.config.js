/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ringWidth: {
        16: "16px",
      },
      fontSize: {
        l: "2.3rem",
      },
    },
    plugins: [],
  },
};
