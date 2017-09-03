const path            = require('path');
const merge           = require('webpack-merge');
const common_config   = require('./webpack.common');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common_config, {
  module: {
    rules: [
      {
        // Run eslint before processing ES6
        enforce: 'pre'
        ,loader: 'eslint-loader'
        ,include: [path.resolve(__dirname, 'src')]
        ,test: /\.js$/
        ,options: {
          emitWarning: true
          ,cache: true
        }
      }
    ]
  }
  ,plugins: [new StyleLintPlugin()]
  ,devtool: 'inline-source-map'
  ,devServer: {
    contentBase: path.resolve(__dirname, 'dist')
    ,port: 3000
  }
});
