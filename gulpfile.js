// npm install browserify vinyl-source-stream gulp-zip

'use strict';

const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const zip = require('gulp-zip');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('js', function () {
    // set up the browserify instance on a task basis
    const b = browserify({
        entries: './src/index.js',
        debug: true
    });

    return b.bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('zip', function() {
    // place code for your default task here
    return gulp.src('./dist/*')
        .pipe(zip('bundle.zip'))
        .pipe(gulp.dest('./dist'))
});