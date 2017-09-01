const path = require('path');
'use strict'

module.exports = {
  entry: './browser',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};


// module.exports = {
//   entry: './browser/index.jsx', // the starting point for our program
//   output: {
//     path: path.join(__dirname, '/public'), // absolute path for the directory where we want the output to be placed
//     filename: 'bundle.js',
//   },
//   context: __dirname,
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['.js', '.jsx', '.scss'],
//   },
//   module: {
//     loaders: [
//       {
//         test: /jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015', 'stage-2'],
//         },
//       },
//       { test: /\.scss?$/, loaders: ['style', 'css', 'sass'] },
//       {
//         test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
//         loader: 'file',
//       },
//     ],
//   },
// };
