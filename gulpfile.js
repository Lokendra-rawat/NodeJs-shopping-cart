const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
-- TOP LEVEL FUNCTIONS --
gulp.task - define tasks
gulp.src - point tofiles to use
gulp.dest - points to folder to output
gulp.watch - watch files and folders for change
*/

//LOGS MESSAGE
gulp.task('msg', function () {
  return console.log("Gulp is running");
});

// COPY ALL HTML FILES
gulp.task('copyfiles', function () {
  gulp.src('*').pipe(gulp.dest('dist'));
  gulp.src('bin/*').pipe(gulp.dest('dist/bin'));
  gulp.src('views/*.ejs').pipe(gulp.dest('dist/views'));
  gulp.src('views/temp/*.ejs').pipe(gulp.dest('dist/views/temp'));
});

// OPTIMIZE IMAGES
gulp.task('imgmin', function () {
  gulp.src('public/images/*').pipe(imagemin()).pipe(gulp.dest('public/images'));
});

//MINIFY FILES
gulp.task('minify', function () {
  gulp.src('public/javascripts/vendor/*').pipe(uglify()).pipe(gulp.dest('dist/javascripts/vendor'));
  return false;
})