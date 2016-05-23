var gulp = require('gulp');
var config = require('../config');

gulp.task('build', ['build-html', 'build-css', 'build-js']);
