/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rabbit-red": "#ea2e0e",
      },
    },
  },
  plugins: [],
};
