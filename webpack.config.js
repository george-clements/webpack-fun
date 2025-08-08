// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const webpack = require("webpack");
const { EnvironmentPlugin } = require("webpack");

const isProduction = process.env.NODE_ENV === "production";

module.exports = (env) => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist")
    },
    mode: "production",
    plugins: [
      new EnvironmentPlugin({
        commitHash: env.commitHash || "local"
      }),
      new webpack.ProvidePlugin({
        callSafely: path.resolve(__dirname, "callSafely.js") // Auto-imports functions
      }),
      new webpack.ProvidePlugin({
        dmp: path.resolve(__dirname, "src/dmp.js") // Auto-imports functions
      })
    ],
    module: {
      rules: [
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: "asset"
        }

        // Add your rules for custom modules here
        // Learn more about loaders from https://webpack.js.org/loaders/
      ]
    }
  };
};
