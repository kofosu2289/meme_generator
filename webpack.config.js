const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = () => ({
  cache: false,
  watch: argv.mode === 'development',
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
  },
  entry: {
    main: path.join(__dirname, 'src', 'ts', 'index.tsx'),
    styles: path.join(__dirname, 'src', 'scss', 'styles.scss')
  }, 
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: false,
      protectWebpackAssets: true,
    }),
    new FixStyleOnlyEntriesPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css'
    }),
    new CopyPlugin([ { from: 'src/img', to: 'images' } ])
  ]
})
