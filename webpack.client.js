const path = require("path");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");

const clientConfig = {
  //tell webpack root file of our server application

  entry: "./src/client/client.js",

  //tell webpack where to put the output file that is generated

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, clientConfig);
