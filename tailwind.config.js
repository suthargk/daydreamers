module.exports = {
  purge: [
    "./src/*.html",
    "./src/*/*.js",
    // mode: "layers",
    // content: ["./public/*.html"],
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#7510f7",
        primaryLight: "#6e01f2",
        darkGrayBlue: "#141c3a",
        darkthemeBlue: "#7000df",
        primaryLowLight: "#7e20f8",
        linkColor: "#0284FE",
      },

      fontFamily: {
        nanum: ["Nanum Pen Script"],
      },
      backgroundImage: (theme) => ({
        "category-left":
          "linear-gradient(to right,rgba(255, 255, 255, 0.98) 20%,rgba(255, 255, 255, 0) 80%)",
        "category-left-dark":
          "linear-gradient(to right, rgba(17, 24, 39, 0.98) 20%, rgba(17, 24, 39, 0) 80%)",
        "category-right":
          "linear-gradient(to left,rgba(255, 255, 255, 0.98) 20%,rgba(255, 255, 255, 0) 80%)",
        "catergory-right-dark":
          "linear-gradient(to left, rgba(17, 24, 39, 0.98) 20%, rgba(17, 24, 39, 0) 80%)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
