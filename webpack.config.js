const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    server: ['babel-polyfill', path.resolve(__dirname, './server.js')],
  },
  output: {
    path: path.resolve(__dirname, './dist'), // 打包后的文件存放的地方
    filename: '[name].js', // 打包后输出文件的文件名
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
};
