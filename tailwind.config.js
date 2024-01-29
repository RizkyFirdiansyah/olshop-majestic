/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    screens: {

      sm: { 'max': '428px' },
      md: { 'max': '480px' },
      lg: { 'max': '768px' },
      xl: "1444px",
    },
    extend: {},

    colors: {
      dark: "#000",
      light: "#fff",
      accent: "#9d0e0e",
    },

    container: {
      center: true,
    },

    animation: {
      blink: "pulse 0.3s cubic-bezier(1, 0, 0.5, 1) infinite ",
    },

    // borderWidth: {
    //   'border-2': '1px_solid',
    // },
  },
  plugins: [],
};
