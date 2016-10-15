"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass");
var minify = require("gulp-minify-css");
var concat = require("gulp-concat");
var webpack = require("webpack-stream");
var config = require("./webpack.config.js");

gulp.task("styles", function () {
    return gulp.src(["src/**/*.scss"])
        .pipe(sass())
        .pipe(concat("styles.css"))
        .pipe(minify())
        .pipe(gulp.dest("dist/"));
});

gulp.task("scripts", function () {
    return gulp.src(["src/**/*.js"])
        .pipe(webpack(config))
        .pipe(minify())
        .pipe(gulp.dest("dist/"));
});

gulp.task("watch", function () {
    gulp.watch(["src/**/*.scss"], ["styles"]);
    //gulp.watch(["src/**/*.js"], ["scripts"]);
});

gulp.task("default", ["watch"]);
