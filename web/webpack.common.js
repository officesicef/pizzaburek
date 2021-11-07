/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const npmPackage = require('./package.json');
const { PORT } = require('./config');

const apiUrl = process.env.API_URL;
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(svg|png)$/,
        use: [
          { loader: 'file-loader' },
          {
            loader: 'svgo-loader',
            options: {
              name: '[name].[hash].[ext]',
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false },
              ],
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.EnvironmentPlugin({
      API_URL: apiUrl,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      ...(npmPackage._moduleAliases || {}),
      src: path.resolve(__dirname, './src'),
    },
  },
  devServer: {
    clientLogLevel: 'silent',
    port: PORT,
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
  },
  externals: {
    config: JSON.stringify({
      apiUrl: 'url',
    }),
  },
};
