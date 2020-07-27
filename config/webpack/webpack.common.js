const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const helpers = require('./helpers');

module.exports = {
  context: helpers.resolveFromRootPath('src'),
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: {
    app: "./index.tsx",
    appStyles: ["./styles.scss"]
  },
  output: {
    filename: "[name].[chunkhash].js"
  },  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },     
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use : [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/images"
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              }
            }
          },
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
   
    new HtmlWebpackPlugin({
      filename: "index.html", 
      template: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};