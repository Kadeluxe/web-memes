const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {VueLoaderPlugin} = require("vue-loader");
const {TsconfigPathsPlugin} = require("tsconfig-paths-webpack-plugin");
const {IS_DEV} = require("./const");
const {BUILD_PATH} = require("./const");

const BABEL_LOADER = {
  loader: "babel-loader",
  options: {
    cacheDirectory: true,
    presets: [
      [
        "@babel/preset-env",
        {
          browserslistEnv: "modern", // TODO: different value for production/development
        },
      ],
    ],
  },
};

const BUILD_CONFIG_COMMON = {
  target: "web",
  entry: {
    main: path.resolve(BUILD_PATH.CLIENT_SRC, "index.ts"),
  },
  output: {
    path: BUILD_PATH.CLIENT_DIST,
    filename: "assets/[name].js",
  },
  resolve: {
    alias: {
      "styles": path.resolve(BUILD_PATH.CLIENT_ASSETS, "styles"),
    },
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        use: [
          BABEL_LOADER,
        ],
      },
      {
        test: /\.ts$/,
        use: [
          BABEL_LOADER,
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          IS_DEV ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "@kadeluxe/client",
      template: path.resolve(BUILD_PATH.CLIENT_ASSETS, "index.html"),
      filename: "index.html",
    }),
  ],
};

module.exports = {
  BUILD_CONFIG_COMMON,

  ...BUILD_CONFIG_COMMON,
};