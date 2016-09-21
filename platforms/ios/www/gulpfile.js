'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var webpack = require("webpack-stream");

gulp.task('styles', function () {
    return gulp.src([
        'src/**/*.scss'
    ])
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('dist/'))
});

gulp.task('scripts', function () {
    return gulp.src([
        'src/**/*.js'
    ])
        .pipe(webpack())
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch(['src/**/*.scss'], ['styles']);
    //gulp.watch(['www/**/*.js'], ['scripts']);
});

gulp.task('default', ['watch']);
