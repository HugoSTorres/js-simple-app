var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
  var browserified = browserify('./app/app.js');
  browserified.transform('brfs');

  return browserified.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public'));
});
