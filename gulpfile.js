//Variables

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var cleanCSS = require('gulp-clean-css');
var gutil = require('gulp-util');
const babili = require("gulp-babili");

sass.compiler = require('node-sass');

//Tasks:

gulp.task('hello', ()=> {

console.log("Nice to see you, Abventor!");

});

gulp.task('browserSync', () => {

    browserSync.init({
        server: {
            baseDir: 'abventor'
        },

    });
});

gulp.task('sass', () => {
    return gulp.src('./src/scss/custom.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({
      stream: true
      }))
  });


  gulp.task("concat", function(){
    return gulp.src('./src/js/main.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./dist/js'));
  })

  gulp.task('minify-css', () => {
    return gulp.src('./src/css/custom.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/css/'));
  });

  gulp.task('scripts', function () {
    return gulp.src(['./src/js/main.js'])
    .pipe(concat('main.min.js'))
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
    .on('error', function (err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(gulp.dest('./dist/js'));
  })


  gulp.task('watch', function(){
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass') );
    gulp.watch('./src/css/*.css', gulp.parallel('minify-css') );
    gulp.watch('./src/js/*.js', gulp.parallel('concat') );
    gulp.watch('./*.html', browserSync.reload);
       
  })

  gulp.task('default', function (callback) {
    runSequence(['watch', 'sass', 'browserSync','concat'],
      callback
    )
  })
