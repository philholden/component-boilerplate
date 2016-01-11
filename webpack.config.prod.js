var path = require('path')
var webpack = require('webpack')

console.log('HAPPY HAPPY --------------------------------------')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'lib'),
//    filename: 'bundle.js',
    publicPath: '/lib/'
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // })
  ],
  module: {
    loaders: [ {
      test: /\.png$/,
      loader: 'url-loader?limit=100000'
    } ]
  }
}
