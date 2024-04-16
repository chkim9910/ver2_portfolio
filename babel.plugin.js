module.exports = {
  tailwind: {
    plugins: ["macros"],
    config: "./src/tailwind.config.js",
    format: "auto",
  },
  emotion: {
    styled: "@emotion/styled",
    css: "@emotion/react",
  },
  styledComponents: {
    pure: true,
  },
};
