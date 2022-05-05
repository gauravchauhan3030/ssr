const path = require("path");
module.exports = {
  //inform  webpack, bundle for nodeJs not for the browser

  target: "node",

  //tell webpack root file of our server application

  entry: "./src/index.js",

  //tell webpack where to put the output file that is generated

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  //tell webpack to run babel on every file it runs through

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { target: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
