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
	path.resolve(__dirname, 'dev')
];

module.exports = function() {

	let config = {};

	config.entry = {
		polyfills: path.resolve(__dirname, 'dev', 'polyfills.ts'),
		app: path.resolve(__dirname, 'dev', 'main.ts')
	};

	config.output = {
		path: path.resolve(__dirname, 'dev'),
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
          template: 'dev/app/index.ejs',
          envDev: !isProd,
          envProd: isProd
        })
    );
  }

	config.devServer = {
		contentBase: './dev',
		historyApiFallback: true,
		stats: 'minimal',
		port: 8080
	};

	return config;
}();