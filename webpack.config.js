const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config();

module.exports = {
  mode: process.env.NODE_ENV,
  // entry: './client/src/index.jsx',
  // output: {
  //   path: path.resolve(__dirname, 'client/public'),
  //   filename: 'app.js',
  // },
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: 'app.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "client/public"),
    hot: true,
    compress: true,
    watchContentBase: true,
    port: 1110
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: '[local]-[hash:base64:7]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'my-custom-hash',
              }
            }
          }
        ],
        include: /\.module\.css$/,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
        exclude: /node_modules/
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'main.css'
  })],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};