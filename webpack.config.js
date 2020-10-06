const path = require('path');
require('dotenv').config();

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'client/public'),
  },
  // output: {
  //   path: path.resolve(__dirname, 'client/public'),
  //   filename: 'app.js',
  // },
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
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.jsx$/,
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
          'style-loader',
          'css-loader'
        ],
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
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};