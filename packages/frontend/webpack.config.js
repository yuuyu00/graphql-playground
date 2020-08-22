/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const { EnvironmentPlugin } = require("webpack");
const gitRevisionPlugin = new GitRevisionPlugin();

const distDir = "public";

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  devtool: "source-map",

  devServer: {
    historyApiFallback: true,
  },

  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, distDir),
    chunkFilename: "[name].bundle.js",
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      react$: path.resolve("node_modules", "react"),
    },
  },

  plugins: [
    new EnvironmentPlugin({
      COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash()),
    }),
    new HtmlWebpackPlugin({
      title: "GraphQL Playground",
      template: path.resolve("src", "public", "index.html"),
    }),
    new PreloadWebpackPlugin(),
    new CompressionPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|svg|mp4)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: process.env.NODE_ENV === "development",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
