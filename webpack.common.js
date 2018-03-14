const path               = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const DashboardPlugin    = require('webpack-dashboard/plugin');

const extract_sass = new ExtractTextPlugin({
  filename: 'css/[name].css'
});

const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    main: [
      'babel-polyfill'
      ,path.resolve(SRC_DIR, 'index.js')
      ,path.resolve(SRC_DIR, 'styles', 'main.scss')
    ]
  }
  ,output: {
    path: path.resolve(__dirname, 'dist')
    ,filename: path.join('js', '[name].bundle.js')
  }
  ,module: {
    rules: [
      {
        // Transpile ES6 to ES5
        loader: 'babel-loader'
        ,include: [SRC_DIR]
        ,test: /\.jsx?$/
        ,query: {
          presets: ['es2015', 'stage-0', 'react']
          ,plugins: ['transform-runtime']
        }
      }
      ,{
        // Preprocess Sass
        use: extract_sass.extract({
          use: [
            {
              loader: 'css-loader'
            }
            ,{
              loader: 'sass-loader'
            }
          ]
        })
        ,include: [SRC_DIR]
        ,test: /\.s?css$/
      }
    ]
  }
  ,plugins: [
    new CleanWebpackPlugin(['dist'])
    ,new HTMLWebpackPlugin({
      title: 'New React Project'
      ,template: path.resolve(SRC_DIR, 'index.html')
      ,inject: 'body'
    })
    ,extract_sass
    ,new DashboardPlugin()
  ]
};

