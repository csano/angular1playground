'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var copy = require('gulp-copy');
var watch = require('gulp-watch');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('app/tsconfig.json'); 
const buildOutput = 'build/';
const appBuildOutput = buildOutput + 'app/';
const appBuildNodeModulesOutput = appBuildOutput + 'node_modules/';
const testOutput = buildOutput + 'test/';
const concatFileName = 'all.js';
const typescriptSources = 'app/ts/**/*.ts';

function copyFilesWithExtension(ext) {
  gulp
    .src('app/**/*.' + ext)
    .pipe(copy(buildOutput, {}));
}

function copyNodeModules() {
  gulp
    .src('./node_modules/**/*.*', { base: './node_modules/'})
    .pipe(gulp.dest('./build/app/node_modules'));
} 

gulp.task('copy-node-modules', function () {
  return copyNodeModules();
});

gulp.task('copy-html', function () {
  return copyFilesWithExtension('html');
});

gulp.task('copy-css', function () {
  return copyFilesWithExtension('css');
});

function compileTypescript() {
  const sourceFilter = filter(['app/ts/**/*.js', '!app/ts/**/*.spec.js']);
  const testFilter = filter(['app/ts/**/*.spec.js']);

  var sourceResult = gulp
    .src(['app/**/*.!(component|module).ts', 'app/**/*.ts'])
    .pipe(tsProject());

  sourceResult.js
    .pipe(testFilter)
    .pipe(gulp.dest(testOutput));

  sourceResult.js
    .pipe(sourceFilter)
    .pipe(concat(concatFileName))
    .pipe(gulp.dest(appBuildOutput));
}

gulp.task('compile-ts', function () {
  return compileTypescript();
});

gulp.task('watch-ts', function() {
  return gulp.watch(typescriptSources, ['copy-html', 'compile-ts']);
});

gulp.task('default', ['compile-ts', 'copy-css', 'copy-html', 'copy-node-modules']);
