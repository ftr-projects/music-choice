var browserSync = require('browser-sync').create();

module.exports = function() {
  browserSync.init({
    server: {
      baseDir: [
        'build'
      ],
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    open: true
  });
};

module.exports.dependencies = [
  'panini',
  'sass',
  'browserify',
  'minify:images',
  'fonts'
];
