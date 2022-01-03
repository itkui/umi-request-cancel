const { merge } = require("webpack-merge");
const { resolve } = require("path");
const common = require("./webpack.common");
// const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  devtool: "inline-source-map",
  entry: {
    app: "/example/index.ts",
  },
  output: {
    path: resolve(__dirname, "..", "dist"),
    filename: "[hash].[name].js",
  },
  plugins: [
    // new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "/public/index.html"),
      title: "webpack test coding",
      meta: {
        keywords: "webpack",
        description: "webpack",
      },
    }),
    new CleanWebpackPlugin(),
  ],
});
