/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize: {
        custom: "3000px 1000px",
      },
      color: {
        given: "#1A8E88",
      },
      backgroundColor: {
        givenback: "#1A8E88",
      },
    },
  },
  plugins: [],
};
