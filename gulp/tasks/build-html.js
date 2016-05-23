'use strict';

var config 		 = require('../config');
var gulp         = require('gulp');
var notify     = require('gulp-notify');
var minifyHTML   = require('gulp-minify-html');
var sftp       = require('gulp-sftp');
var cache = require('gulp-cached');

gulp.task('build-html', function () {
  return gulp.src(config.htmlFiles)
  	.pipe(cache('html'))
    .pipe(minifyHTML({
        conditionals: true,
        spare: true,
        empty: true
    }))
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(gulp.dest(config.markup.dest+'/'))
    .pipe(notify("HTML Procesado"));
});
