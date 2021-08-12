const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
    ? {
        "@fullhuman/postcss-purgecss": {
          content: [
            "./components/**/*.*",
            "./pages/**/*.*",
            "./contexts/**/*.*",
            "./gql/**/*.*",
            "./utils/**/*.*",
            "./public/**/*.*",
          ],
          defaultExtractor: (content) =>
            content.match(/[\w-/.:]+(?<!:)/g) || [],
        },
      }
    : {}),
  },
}
