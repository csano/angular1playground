'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var copy = require('gulp-copy');
var tsc = require('gulp-typescript');
var bower = require('gulp-bower');
var tsProject = tsc.createProject('app/tsconfig.json'); 
var buildOutput = 'build/';
var appBuildOutput = buildOutput + 'app/';
var testOutput = buildOutput + 'test/';
var concatFileName = 'all.js';

function copyFilesWithExtension(ext) {
  gulp
    .src('app/**/*.' + ext)
    .pipe(copy(buildOutput, {}));
}

gulp.task('copy-html', function () {
  return copyFilesWithExtension('html');
});

gulp.task('copy-css', function () {
  return copyFilesWithExtension('css');
});

gulp.task('install-bower-components', function() {
  return bower({ directory: 'build/app/bower_components' });
});

gulp.task('compile-ts', function () {

  const sourceFilter = filter(['app/ts/**/*.js', '!app/ts/**/*.spec.js']);
  const testFilter = filter(['app/ts/**/*.spec.js']);

  var sourceResult = gulp
    .src('app/ts/**/*.ts')
    .pipe(tsProject());

  sourceResult.js
    .pipe(testFilter)
    .pipe(gulp.dest(testOutput));

  sourceResult.js
    .pipe(sourceFilter)
    .pipe(concat(concatFileName))
    .pipe(gulp.dest(appBuildOutput));

});

// /**
//  * Remove all generated JavaScript files from TypeScript compilation.
//  */
// gulp.task('clean-ts', function (cb) {
//   var typeScriptGenFiles = [
//                               config.tsOutputPath +'/**/*.js',    // path to all JS files auto gen'd by editor
//                               config.tsOutputPath +'/**/*.js.map', // path to all sourcemap files auto gen'd by editor
//                               '!' + config.tsOutputPath + '/lib'
//                            ];

//   // delete the files
//   del(typeScriptGenFiles, cb);
// });

gulp.task('default', ['compile-ts', 'install-bower-components', 'copy-css', 'copy-html']);