const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    server: ['babel-polyfill', path.resolve(__dirname, './server.js')],
  },
  output: {
    path: path.resolve(__dirname, './dist'), // 打包后的文件存放的地方
    filename: 'contacts-api.js', // 打包后输出文件的文件名
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
    new webpack.DefinePlugin({
      // 'process.env.PORT': 80,
    }),
  ],
};
