const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Overpass Mono", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        tomato: "#ff6347",
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
