'use strict';

const Path = require('path');

module.exports = {
  entry: Path.join(__dirname, '/react/app.js'),
  output: {
    path: Path.join(__dirname, '/react/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}