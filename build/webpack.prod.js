const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolve } = require("path");

module.exports = merge(common, {
  entry: {
    app: "/src/index.ts",
  },
  output: {
    path: resolve(__dirname, "..", "lib"),
    filename: "umi-request-cancel.js",
    library: "umi-request-cancel",
    libraryTarget: "umd",
  },
});
