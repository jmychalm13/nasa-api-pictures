const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./script.js",
  output: {
    filename: "main.js",
    publicPath: "dist",
  },
  plugins: [new DotenvWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
