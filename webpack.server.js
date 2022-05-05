const path = require("path");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");

const serverConfig = {
  //inform  webpack, bundle for nodeJs not for the browser

  target: "node",

  //tell webpack root file of our server application

  entry: "./src/index.js",

  //tell webpack where to put the output file that is generated

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};

module.exports = merge(baseConfig, serverConfig);
