const changed = require('gulp-changed');
const gulp = require('gulp');
const config = require('../config').videos;
const browserSync = require('browser-sync');

gulp.task('videos', () =>
    gulp
        .src(config.src)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.dest))
        .pipe(
            browserSync.reload({
                stream: true,
            })
        )
);
