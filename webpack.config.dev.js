var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  //devtool: 'eval',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
        {test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src')},
        {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.scss$/, loader: 'style!css!sass'},
        {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // inline base64 URLs for <=8k images, direct URLs for the rest
        {test: /\.rt$/, loaders: ['react-templates-loader?targetVersion=0.14.0'], include: path.join(__dirname, 'src')}
    ]
  }
};
