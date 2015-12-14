var webpack = require("webpack");

var PROD = JSON.parse(process.env.PROD_DEV || "0");
PROD = 1; // FOR DISTRIBUTION /** MINIFIED JS **/
module.exports = {

  entry: "./js/entry.js",
  devtool: "source-map",
  output: {
    path: "./dist",
    filename: PROD ? "bundle.min.js" : "bundle.js"
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ] : []
  
};