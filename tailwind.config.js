const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Overpass Mono", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        tomato: "#ff6347",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
