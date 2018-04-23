const path = require('path');

const config = {

  mode: 'development',
  devtool: 'eval',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, "./client/public"),
    compress: true,
    port: 8080,
    overlay: true,
    hot: true
  },

  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './client/public/build'),
    publicPath: 'build/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'stage-0', 'react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'autoprefixer-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          //{
            //loader: 'autoprefixer-loader'
          //},
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            } 
          },
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            } 
          }
        ]
      }
    ]
  }
}

module.exports = config;