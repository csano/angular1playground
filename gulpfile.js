'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('app/tsconfig.json'); 
var buildOutput = 'build/';
var testOutput = buildOutput + 'test/'

//var config = new Config();
gulp.task("compile-ts", function () {

  const sourceFilter = filter(['app/ts/**/*.js', '!app/ts/**/*.spec.js']);
  const testFilter = filter(['app/ts/**/*.spec.js']);

  var sourceResult = gulp
    .src('app/ts/**/*.ts')
    .pipe(tsProject());

  sourceResult
    .pipe(testFilter)
    .pipe(gulp.dest(testOutput));

  sourceResult.js
    .pipe(sourceFilter)
    .pipe(concat('out.js'))
    .pipe(gulp.dest(buildOutput));

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

gulp.task('default', ['compile-ts']);