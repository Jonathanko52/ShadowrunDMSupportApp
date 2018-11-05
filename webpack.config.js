const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')

const htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: "./views/login.html",
  filename: "./login.html"
});
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "styles.css"
});

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            plugins:[ 'transform-object-rest-spread' ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          
             "style-loader",
             MiniCssExtractPlugin.loader,
             "css-loader"

        ]
      }
    ]
  },
  plugins: [
    htmlWebPackPlugin,
    miniCssExtractPlugin
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/assets'
  },
  devServer: {
    contentBase: path.join(__dirname),
    port: 9000

  }
  
};