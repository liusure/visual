const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let env = process.env.NODE_ENV == "development" ? "development" : "production";
module.exports = {
  entry: "./app/app", // string | object | array
  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）

    publicPath: "/assets/", // string    // 输出解析文件的目录，url 相对于 HTML 页面

  },
  module: { //要打包的第三方模块

    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    },
      {
        test: /\.(less)$/,
        use: ['style-loader', 'css-loader', 'less-loader',]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ttf|wtoff|eot|png|jpe?g|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'app'),//@指向src
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    port: '8082',
    inline: true,
    proxy: {
      '/cms': {
        target: 'http://localhost:8081',//https://cs.tenfenbook.com
        changeOrigin: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "build/index.html",
      title: "zen_test"
    })
  ]
}