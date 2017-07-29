const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname + '/src'), // `__dirname` is root of project and `src` is source
  entry: {
    'app': './app.js',
  },
  output: {
    path: path.resolve(__dirname + '/dist'), // `dist` is the destination
    publicPath: './src/assets/',
    filename: '[name].bundle.js',
  },
  devServer: {
    open: true, // to open the local server in browser
    contentBase: path.resolve(__dirname + 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Check for all js files
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            },
          }
        ],
      },
      {
        test: /\.(sass|scss)$/, //Check for sass or scss file names
        exclude: [/node_modules/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.json$/,
        exclude: [/node_modules/],
        loader: 'json-loader'  //JSON loader
      }
    ]
  },
  devtool: (process.env.NODE_ENV === 'production') ? 'eval-source-map' : 'source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
};

module.exports = config;