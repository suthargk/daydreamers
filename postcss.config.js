const cssnano = require("cssnano");
console.log(process.env.NODE_ENV);
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
