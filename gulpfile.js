var path = require('path');
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json'));
var assetsPath = path.resolve(pkg.path.assetsDir);

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  return gulp.src(path.join(assetsPath, 'sass/index.scss'))
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest(path.join(assetsPath, 'css/')));
});

gulp.task('default', function() {
    gulp.watch(path.join(assetsPath, 'sass/**/*.scss'), gulp.series('sass'));
});
