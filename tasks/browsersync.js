const bs = require('browser-sync').create('Enjin');

const config = {
  proxy: 'https://www.reallybadplayers.com/',
  port: 8080,
  cors: true,
  serveStatic: ['dist'],
  rewriteRules: [
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/app.min.css',
      once: true,
      replace: '/app.min.css',
    },
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/bundle.js',
      once: true,
      replace: '/bundle.js',
    },
  ],
};

/**
 * Does things with browserSync, obviously.
 */
export function browserSync() {
  bs.init(config);

  bs.watch('dist/*.css', function(event, file) {
    if (event === 'change') {
      bs.reload('*.css');
    }
  });

  bs.watch('dist/**/*.js', function(event, file) {
    if (event === 'change') {
      bs.reload('*.js');
    }
  });
}

export default browserSync;
