const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: 'app.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, "client/public"),
    hot:true,
    compress: true,
    watchContentBase: true,
    port: 1110
  },
  module: {
    rules: [
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
        include: /\.module\.css$/
      },
      {
      test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  watch: true,
};