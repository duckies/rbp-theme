import path from 'path';
import webpack from 'webpack';

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const entry = {
  home: './scripts/pages/home.js',
  about: './scripts/pages/about.js',
  apply: './scripts/pages/apply.js',
  roster: './scripts/pages/roster.js',
  dashboard: './scripts/pages/dashboard.js',
};

const output = {
  filename: '[name].js',
  path: path.resolve(__dirname, '../dist'),
};

const optimization = {
  splitChunks: {
    chunks: 'initial',
  },
};

const config = {
  mode: mode,
  entry: entry,
  output: output,
  optimization: optimization,
  context: path.resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

/**
 * Initializes webpack.
 * @return {Promise}
 */
function scripts() {
  return new Promise((resolve) =>
    webpack(config, (err, stats) => {
      if (err) console.log('Webpack', err);
      console.log(stats.toString());
      resolve();
    })
  );
}

export default scripts;
