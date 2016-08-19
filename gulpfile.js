'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var webpack = require("webpack-stream");

gulp.task('styles', function () {
    return gulp.src([
        'www/**/*.scss'
    ])
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('www/Bundle/'))
});

gulp.task('scripts', function () {
    return gulp.src([
        'www/**/*.js'
    ])
        .pipe(webpack())
        .pipe(uglify())
        .pipe(gulp.dest('www/Bundle/'));
});

gulp.task('watch', function () {
    gulp.watch(['www/**/*.scss'], ['styles']);
    gulp.watch(['www/**/*.js'], ['scripts']);
});

gulp.task('default', ['watch']);
