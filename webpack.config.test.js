'use strict';

let path = require('path');
let srcPath = path.join(__dirname, './src');
let testPath = path.join(__dirname, './test');


// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-instrumenter-loader',
        include: [
          srcPath
        ]
      }
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include:[
            srcPath,
            testPath
        ]
        
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
    alias: {
        "component": path.join(__dirname, "./src/component"),
        "middleware": path.join(__dirname, "./src/middleware"),
        "store": path.join(__dirname, "./src/store")
    }
  },
  plugins: [
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ]
};
