const plugins = [];

module.exports = {
  mode: process.env.NODE_ENV || "development",
  // optimization: {
  //   runtimeChunk: "single",
  // },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    hot: true,
    port: 3000,
    compress: true,
  },
  plugins,
};
