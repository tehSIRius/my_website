module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        quarter: "25%",
        half: "50%",
        "three-quarters": "75%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
