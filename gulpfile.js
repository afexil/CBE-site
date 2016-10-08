var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');


gulp.task('default', function () {
  return watch('./scss/*.scss', function () {
    gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./css'));
  });
});
