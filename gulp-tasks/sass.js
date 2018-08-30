var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function() {
  return gulp.src('app/styles/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        'node_modules/bourbon/app/assets/stylesheets',
        'node_modules/bourbon-neat/app/assets/stylesheets',
        'node_modules/font-awesome/scss'
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/styles'));
};
