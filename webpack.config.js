var HTMLWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: 'index.html',
  filename: '../index.html',
  inject: 'body'
})

module.exports = {
  entry: __dirname + '/js/app.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
	loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [HTMLWebpackPluginConfig]
}
