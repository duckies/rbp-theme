const bs = require('browser-sync').create('Enjin');

const config = {
  proxy: 'https://www.reallybadplayers.com/',
  port: 8080,
  cors: true,
  files: ['dist/**'],
  serveStatic: ['dist'],
  routes: {
    'https://s3.amazonaws.com/files.enjin.com/632721/material/': '/',
  },
  rewriteRules: [
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/app.min.css',
      once: true,
      replace: '/app.min.css',
    },
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/about.js',
      once: true,
      replace: '/about.js',
    },
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/apply.js',
      once: true,
      replace: '/apply.js',
    },
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/forum.js',
      once: true,
      replace: '/forum.js',
    },
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/home.js',
      once: true,
      replace: '/home.js',
    },
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/roster.js',
      once: true,
      replace: '/roster.js',
    },
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/system.js',
      once: true,
      replace: '/system.js',
    },
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/vendors~about~apply~forum~home~roster~system.js',
      once: true,
      replace: '/vendors~about~apply~forum~home~roster~system.js',
    },
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/vendors~home.js',
      once: true,
      replace: '/vendors~home.js',
    },
    {
      match: 'https://s3.amazonaws.com/files.enjin.com/632721/material/vendors~system.js',
      once: true,
      replace: '/vendors~system.js',
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
