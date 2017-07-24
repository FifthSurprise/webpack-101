const merge = require('webpack-merge').smart;
const base = require('./webpack.config.base.js');

module.exports = merge(base, {
  //devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader', 'resolve-url-loader']
      }
    ]
  }
});
