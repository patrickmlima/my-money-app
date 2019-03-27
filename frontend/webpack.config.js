const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules',
      jquery: __dirname + '/node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
      bootstrap: __dirname + '/node_modules/admin-lte/bootstrap/js/bootstrap.min.js'
      // jquery: __dirname + '/node_modules/jquery/dist/jquery.min.js',
      // bootstrap: __dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin({ filename: 'app.css'})
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.woff|\.woff2|\.ttf|\.eot|\.svg*.*|\.png|\.jpg$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
