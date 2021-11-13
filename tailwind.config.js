module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: "#66E2DC",
        orange: "#FA7453",
        yellow: "#FFB964",
        white: "#FCFAF9",
        black: "#191826",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
