const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./static/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  plugins: [
    new HtmlPlugin({
      template: "./home.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "static",
        },
      ],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
