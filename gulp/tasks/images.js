const changed = require('gulp-changed');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../config').images;
const browserSync = require('browser-sync');

gulp.task('images', () =>
    gulp
        .src(config.src)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(config.dest))
        .pipe(
            browserSync.reload({
                stream: true,
            })
        )
);
