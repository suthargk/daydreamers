module.exports = {
  purge: {
    mode: "layers",
    content: ["./public/*.html"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#7510f7",
        primaryLight: "#6e01f2",
      },
      backgroundImage: (theme) => ({
        "event-card-image": "url('/public/img/picture_1.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
