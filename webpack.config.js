const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.resolve(__dirname, "src"),
  entry: path.join(__dirname, "src/index.js"),
  app: path.join(__dirname, "src/app/"),
  build: path.join(__dirname, "dist")
};

module.exports = {
  mode: "development",
  entry: {
    app: PATHS.entry
  },
  output: {
    filename: "[name].bundle.js",
    path: PATHS.build,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.html$/,
        use: { loader: "html-loader" }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "@": PATHS.src,
      "@app": PATHS.app
    }
  },
  stats: "errors-only",
  devServer: {
    stats: "errors-only",
    overlay: {
      errors: true,
      warnings: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "index.html")
    })
  ]
};
