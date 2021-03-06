'use strict';

var config     = require('../config');
var gulp       = require('gulp');
var sass       = require('gulp-sass');
var notify     = require('gulp-notify');
var concat     = require('gulp-concat');
var minifyCSS  = require('gulp-minify-css');

gulp.task('build-css', function () {
  gulp.src(config.scssFiles)
    .pipe(concat('styles.min.css'))
    .pipe(sass())
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.markup.dest+'/css/'))
    .pipe(notify("CSS Procesado"));
  });
