const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const del = require('del');


function browsersync () {
  browserSync.init({
    server: {
      baseDir: 'src/'
    },
    notify: false
  });
}

function styles() {
  return src('src/scss/style.scss')
  .pipe(scss({outputStyle: 'compressed'}))
  .pipe(concat('style.min.css'))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 10 versions'],
    grid: true
  }))
  .pipe(dest('src/css'))
  .pipe(browserSync.stream());
}

function images() {
  return src('src/images/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))
  .pipe(dest('dist/images'));
}

function cleanDist() {
  return del('dist');
}

function build() {
  return src([
    'src/**/*.html',
    'src/fonts/**/*',
    'src/css/style.min.css'
  ], {base: 'src'})
  .pipe(dest('dist'));
}

function watching() {
  watch(['src/scss/**/*.scss'], styles);
  watch(['src/js/**/*.js', '!src/js/main.min.js']);
  watch(['src/**/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.browsersync = browsersync;
exports.watching = watching;
exports.cleanDist = cleanDist;
exports.images = images;
exports.build = series(cleanDist, images, build);

exports.default = parallel(styles, browsersync, watching);
