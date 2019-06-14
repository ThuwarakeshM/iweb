const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: './src/index.js',
    home: './src/home/index.js',
    contact: './src/contact/index.js',
    about: './src/about/index.js',
    solutions: './src/solutions/index.js',
    clients: './src/clients/index.js',
    techstack: './src/techstack/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/static/web'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ]
};