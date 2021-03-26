module.exports = {
  purge: {
    mode: "layers",
    content: ["./public/*.html"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#7510f7",
        primaryLight: "#6e01f2",
        darkGrayBlue: "#141c3a",
      },
      fontFamily: {
        nanum: ["Nanum Pen Script"],
      },
      backgroundImage: (theme) => ({
        "event-card-image": "url('/public/img/picture_1.jpg')",
        // "hero-image": "url('/public/img/hero.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
