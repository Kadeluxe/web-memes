const {BUILD_PATH} = require("./const");
const {merge} = require("webpack-merge");
const {BUILD_CONFIG_COMMON} = require("./common");

const BUILD_CONFIG_DEV = merge(BUILD_CONFIG_COMMON, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: BUILD_PATH.CLIENT_DIST,
    disableHostCheck: true,
    publicPath: "/",
    open: false,
    compress: true,
    hot: true,
    port: 1337,
    overlay: true,
    // stats: "minimal",
    proxy: {
      "/api": "http://127.0.0.1:4000/api",
    },
  },
  plugins: [],
});

module.exports = BUILD_CONFIG_DEV;