var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['_watch']);

gulp.task('_watch', function() {
  // gulp.watch(config.markup.src, ['build-css', 'build-html', 'build-js']);
  gulp.watch(config.jsFiles, ['build-js']);
  gulp.watch(config.scssFiles, ['build-css']);
  gulp.watch(config.htmlFiles, ['build-html']);
  gulp.watch(config.otherFiles, ['copy-other']);
});
