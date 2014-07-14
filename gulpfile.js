var argv = require('yargs').argv;
var gulp = require('gulp');
var karma = require('gulp-karma');
var jshint = require('gulp-jshint');
var protractor = require('gulp-protractor').protractor;
var spawn = require('child_process').spawn;

var testFiles = [
	  'src/bower_components/angular/angular.js',
	  'src/bower_components/angular/angular-mocks.js',
	  'src/lib/**/*.js',
	  'src/app/app.js',
	  'src/app/**/*.js',
	  'spec/functional/**/*.js'
];

var sourceFiles = ['src/app/**/*.js'];

gulp.task('test', function() {
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            reporters: ['progress'],
            autoWatch: true,
            action: 'start'
        }));
});

gulp.task('runTestOnce', function () {
    return gulp.src(testFiles)
      .pipe(karma({
          configFile: 'karma.conf.js',
          singleRun: true,
      }))
      .on('error', function (err) {process.exit(1);});
});

gulp.task('acceptance', function () {
    return gulp.src('spec/features/**/*.js')
        .pipe(protractor({
            configFile: 'protractor.config.js',
            args: ['--baseUrl', 'http://saad1200.github.io/']
        }))
    .on('error', function (err) {process.exit(1);});
});

gulp.task('lint', function() {
    gulp.src(sourceFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('webdriver-update', function(){
  spawn('./node_modules/protractor/bin/webdriver-manager', ['update'], {
    stdio: 'inherit'
  });
});

gulp.task('watch', function () {
  gulp.watch([sourceFiles,testFiles,acceptanceTestFiles], ['lint']);
});

gulp.task('default', ['lint', 'test', 'watch']);