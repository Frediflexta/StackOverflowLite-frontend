const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
require('@babel/polyfill');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
  devServer: {
    port: 9000,
    compress: true,
    historyApiFallback: true,
    contentBase: '/src',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      template: './src/index.html',
    }),
  ],
};
