const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('../config').fonts;

// Copy fonts to build folder
gulp.task('fonts', () =>
    gulp
        .src(config.src)
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.stream())
);
