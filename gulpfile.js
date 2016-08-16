'use strict';
var gulp   = require('gulp');
var sass   = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var webpack  = require("webpack-stream");
var config   = require("./webpack.config.js");

gulp.task('sass', function () {
  return gulp.src([
    'www/**/*.scss'
  ])
    .pipe(concat('styles.js'))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('www/Bundle/'))
});

gulp.task('js', function () {
  return gulp.src([
    'www/**/*.js'
  ])
    .pipe(webpack(config))
    .pipe(uglify())
    .pipe(gulp.dest('www/Bundle/'));
});

gulp.task('watch', function () {
  gulp.watch(['www/**/*.scss'],   ['sass']);
  gulp.watch(['www/**/*.js'], ['js']);
});

gulp.task('default', ['watch']);
