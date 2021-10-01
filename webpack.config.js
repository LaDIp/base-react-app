/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATH = {
  src: path.resolve(__dirname, './src'),
  public: path.resolve(__dirname, './public'),
}

module.exports = {
  mode: 'development',
  target: 'web',
  entry: `${PATH.src}/index.tsx`,
  output: {
    path: PATH.public,
    filename: 'index.js',
  },
  resolve: {
    modules: [PATH.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    watchFiles: `${PATH.public}/*.*`,
    compress: true,
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.module\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
}
