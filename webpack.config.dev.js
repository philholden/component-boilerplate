var path = require('path') // eslint-disable-line no-var
var webpack = require('webpack') // eslint-disable-line no-var

module.exports = {
  devtool: 'cheap-module-eval-source-map',
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
  resolve: {
    modulesDirectories: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [ 'babel' ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.png$/, loader: 'url-loader?limit=100000'
      }
    ]
  }
}
