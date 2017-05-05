const webpack = require('webpack');
const path = require('path');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const LoaderOptionsPlugin = webpack.LoaderOptionsPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ENV = process.env.npm_lifecycle_event;
const isTest = ENV === 'test' || ENV === 'test-watch';
const isProd = ENV === 'build';

const include = [
  path.resolve(__dirname, 'src')
];

module.exports = function() {

  let config = {};

  config.entry = isTest ? {} : {
        polyfills: path.resolve(__dirname, 'src', 'polyfills.ts'),
        app: path.resolve(__dirname, 'src', 'main.ts')
      };

  config.output = isTest ? {} : {
        path: path.resolve(__dirname, 'src'),
        filename: '[name].js'
      };

  if (isProd) {
    config.devtool = 'source-map';
  }

  config.cache = true;

  config.resolve = {
    extensions: ['.ts', '.js', '.scss', '.html']
  };

  config.module = {
    exprContextCritical: false,
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        include
      },
      {
        test: /.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        include
      }
    ]
  };


  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        IS_DEV: !isProd,
        IS_PROD: isProd
      }
    })
  ];

  if (!isTest) {
    config.plugins.push(
        new CommonsChunkPlugin({
          name: ['polyfills']
        }),

        new HtmlWebpackPlugin({
          template: 'src/app/index.ejs',
          envDev: !isProd,
          envProd: isProd
        })
    );
  }

  config.devServer = {
    contentBase: './src',
    historyApiFallback: true,
    stats: 'minimal',
    port: 8080
  };

  return config;
}();