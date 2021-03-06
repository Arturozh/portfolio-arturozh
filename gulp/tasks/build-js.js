'use strict';

var config 		 = require('../config');
var gulp       = require('gulp');
var jshint     = require('gulp-jshint');
var concat     = require('gulp-concat');
var notify     = require('gulp-notify');
var ngAnnotate = require('gulp-ng-annotate');
var uglify 		 = require('gulp-uglify');

gulp.task('build-js', function() {
  gulp.src(config.jsFiles)
    .pipe(jshint())
    .on("error", notify.onError("Error: <%= error.message %>"))
    .pipe(jshint.reporter('default'))
    .pipe(ngAnnotate())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.markup.dest+'/js/'))
    .pipe(notify("Javascript Procesado"));
});

