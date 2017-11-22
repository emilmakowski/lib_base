//--------------------------------------------------------------------------
//  Imports & declarations
//--------------------------------------------------------------------------
var gulp 			   = require('gulp');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var size         = require('gulp-size');
var uglify       = require('gulp-uglify');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var webserver    = require('gulp-webserver');
var streamqueue  = require('streamqueue');
var del          = require('del')

//--------------------------------------------------------------------------
//  Project shorcut paths
//--------------------------------------------------------------------------

var scriptsPath = './build/src/js/';
var buildPath   = './build';

//--------------------------------------------------------------------------
//  Error handler
//--------------------------------------------------------------------------

var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Beep"
  })(err);
  this.emit('end');
};

//--------------------------------------------------------------------------
//  Default task
//--------------------------------------------------------------------------

gulp.task('default', function() {

});

//--------------------------------------------------------------------------
//  Webserver
//--------------------------------------------------------------------------

gulp.task('webserver', function() {
  gulp.src(buildPath)
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 3000
    }));
});

//--------------------------------------------------------------------------
//  Watch task
//--------------------------------------------------------------------------

gulp.task('watch', function() {
  gulp.watch(['system/*.js', 'scope/*.js'], ['scripts']);
	gulp.watch(['./build/*.html'], ['html']);
});

//--------------------------------------------------------------------------
//  Project tasks
//--------------------------------------------------------------------------

gulp.task('html', function () {
  // return gulp.src(['./build/*.html']);
});

gulp.task('scripts', function() {
  return streamqueue({ objectMode: true },
    gulp.src('./scope/Manifest.js'),
		gulp.src('./system/Main.js'),
		gulp.src('./scope/Alias.js')
  )
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./build/src/js'))
  .pipe(plumber({errorHandler: onError}))
	.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('scripts-minify', function() {
  return gulp.src(['build/src/js/app.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build/src/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(gulp.dest('./build/src/js'))
		.pipe(notify({ message: 'Scripts minify task complete' }));
});

//--------------------------------------------------------------------------
//  Main tasks
//--------------------------------------------------------------------------

gulp.task('default', ['html', 'scripts', 'scripts-minify', 'watch', 'webserver']);

gulp.task('clean', function() {
  return del(['./build/src/js']);
});

gulp.task('build', ['clean'], function() {
  gulp.start('html', 'scripts', 'scripts-minify');
});
