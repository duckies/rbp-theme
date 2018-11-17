import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';


const webpackConfig = {
  mode: 'production',
  entry: {
    home: './scripts/pages/home.js',
    about: './scripts/pages/about.js',
    apply: './scripts/pages/apply.js',
    roster: './scripts/pages/roster.js',
    dashboard: './scripts/pages/dashboard.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 0,
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        // Memory issues in WSL
        sourceMap: true,
        parallel: 4,
        extractComments: true,
      }),
    ],
  },
  context: path.resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  // Memory issues in WSL
  devtool: 'source-map',
};

/**
 * Initializes webpack.
 * @return {Promise}
 */
export default function scripts() {
  return new Promise((resolve) => webpack(webpackConfig, (err, stats) => {
    if (err) console.log('Webpack', err);
    console.log(stats.toString({
      // all: true,
      colors: true,
      hash: false,
      version: false,
      timings: false,
      chunks: false,
      modules: false,
      entrypoints: false,
    }));
    resolve();
  }));
}
