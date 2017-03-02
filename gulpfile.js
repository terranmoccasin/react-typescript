var gulp = require('gulp')
var ts = require('gulp-typescript');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');

// var tsProject = ts.createProject('./tsconfig.server.json');

gulp.task('default', function () {
  return tsProject.src()
      .pipe(tsProject())
      .js.pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
  gulp.src('./src/app.tsx')
      .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
      .pipe(gulp.dest('./dist/js'));
});
