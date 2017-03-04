var scss = "./development/stylesheet.scss";
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require("gulp-concat");
var cssmin = require('gulp-cssmin');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
    return gulp.src(scss)
    .pipe( sass.sync().on('error', sass.logError) )
    .pipe( concat('core.min.css') )
    .pipe( postcss([ autoprefixer({browsers: "> 5%, last 5 firefox versions, last 5 chrome versions, last 5 safari versions, last 5 edge versions, ie 11, ie 7, ie 8, ie 9"}) ]) )
    .pipe( cssmin() )
    .pipe( gulp.dest('./ang/') )
});

gulp.task('build', ['sass']);

gulp.task('watch', function() {
    gulp.watch(scss, ['sass']);
});