module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grey: {
        extralight: "#75787D",
        lighter: "#C4C4C4",
        light: "#484C55",
        DEFAULT: "#3B404A",
        dark: "#2A303D",
      },
      white: "#ffffff",
      red: "#D64141",
      green: "#409A6A",
      blue: "#4162D6",
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
