const path            = require('path');

const merge           = require('webpack-merge');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const common_config   = require('./webpack.common');

module.exports = merge(common_config, {
  module: {
    rules: [
      {
        // Run eslint before processing ES6
        include: [path.resolve(__dirname, 'src')]
        ,test: /\.jsx?$/
        ,loader: 'eslint-loader'
        ,enforce: 'pre'
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
