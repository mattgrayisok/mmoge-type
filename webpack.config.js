var webpack = require("webpack");

module.exports = {  
  entry: './src/client.ts',
  output: {
    filename: 'build/client.js'
  },
 plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],  
resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
