const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const paths = {
    src: 'sepcss/**/*.scss',
    dest: 'css',
};

// Compile Sass, autoprefix, minify CSS
gulp.task('styles', () => {
    return gulp
        .src(paths.src)
        .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.dest));
});

// Watch for changes in Sass files
gulp.task('watch', () => {
    gulp.watch(paths.src, gulp.series('styles'));
});

// Default task
gulp.task('default', gulp.series('styles', 'watch'));
