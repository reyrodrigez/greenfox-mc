const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/client');
const PUBLIC_DIR = path.resolve(APP_DIR, 'public');
const CLIENT_PUBLIC_DIR = path.resolve(DIST_DIR, 'public');
const CLIENT_DIST_DIR = path.resolve(CLIENT_PUBLIC_DIR, 'dist');

const client = {
  entry: ['babel-polyfill', APP_DIR + '/index.js'],
  output: {
    filename: CLIENT_DIST_DIR+ '/bundle.js',
    publicPath: PUBLIC_DIR
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    loaders: [{
      test: /\.js?/,
      include: APP_DIR,
      loaders: ['babel', 'eslint']
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap!sass?sourceMap'
          )
    },{
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  plugins: [
    new ExtractTextPlugin(CLIENT_DIST_DIR + '/bundle.css'),
    new CopyWebpackPlugin([{
      from: path.resolve(PUBLIC_DIR, 'index.html'),
      to: CLIENT_PUBLIC_DIR}
    ])
  ]
};

module.exports = client;
