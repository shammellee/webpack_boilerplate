const path           = require('path');
const webpack        = require('webpack');
const merge          = require('webpack-merge');
const common_config  = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common_config, {
  plugins: [
    new UglifyJSPlugin()
    ,new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
  ,devtool: 'cheap-module-source-map'
});

