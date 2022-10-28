const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  resolve: {
    mainFields: ['main', 'module', 'browser'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  entry: './src/index.tsx',
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
  },
  output: {
    path: path.resolve(process.cwd(), 'dist/react'),
    publicPath: '/',
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './public/index.html',
    }),
  ],
};