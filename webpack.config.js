// webpack.config.js
module.exports = {
  entry: {
    App: "./output/App.js",
    RockPaperScissors: "./output/RockPaperScissors.js",
  },
  output: {
    // default output to ./dist folder
    filename: "[name].js", // Retain original file name
  },
  mode: "development",
  watch: true,
};
