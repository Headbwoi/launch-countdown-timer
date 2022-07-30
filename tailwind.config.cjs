/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      redHat: ["'Red Hat Text', 'sans_serif'"],
    },
    colors: {
      Grayish_blue: "hsl(237, 18%, 59%)",
      Soft_red: "hsl(345, 95%, 68%)",
      White: "hsl(0, 0%, 100%)",
      Dark_desaturated_blue: "hsl(236, 21%, 26%)",
      Very_dark_blue: "hsl(235, 16%, 14%)",
      black_blue: "hsl(234, 17%, 12%)",
    },
    extend: {
      padding: {
        "px-mobile": "23px",
      },
    },
  },
  plugins: [],
}
