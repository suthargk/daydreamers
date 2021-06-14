const cssnano = require("cssnano");

module.exports = {
  plugins: {
    "@tailwindcss/jit": {},
    "postcss-import": {},
    ...(process.env.NODE_ENV === "production" && {
      cssnano: { preset: "default" },
    }),
    autoprefixer: {},
  },
};
