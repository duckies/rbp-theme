const bs = require('browser-sync').create('Enjin');

const config = {
  proxy: "https://rbp.enjin.com/",
  port: 8080,
  cors: true,
  serveStatic: ["dist"],
  rewriteRules: [
    {
      match: "https://s3.amazonaws.com/files.enjin.com/1604436/app.min.css",
      replace: "/app.min.css"
    },
    {
      match: "https://s3.amazonaws.com/files.enjin.com/1604436/bundle.js",
      replace: "/bundle.js"
    }
  ]
};

export function browserSync() {
  bs.init(config);

  bs.watch('dist/*.css', function (event, file) {
    if (event === 'change') {
      bs.reload('*.css');
    }
  });

  bs.watch('dist/*.js', function (event, file) {
    if (event === 'change') {
      bs.reload('*.js');
    }
  });
}

export default browserSync;