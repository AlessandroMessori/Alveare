'use strict';
var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var webpack  = require("webpack-stream");
var config   = require("./webpack.config.js");

gulp.task('css', function () {
  return gulp.src([
    'www/**/*.css'
  ])
    .pipe(concat('styles.css'))
    .pipe(minify())
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
  gulp.watch(['www/**/*.css'],   ['css']);
  gulp.watch(['www/**/*.js'], ['js']);
});

gulp.task('default', ['watch']);
