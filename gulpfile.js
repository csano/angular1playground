'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var copy = require('gulp-copy');
var watch = require('gulp-watch');
var tsc = require('gulp-typescript');
var bower = require('gulp-bower');
var tsProject = tsc.createProject('app/tsconfig.json'); 
const buildOutput = 'build/';
const appBuildOutput = buildOutput + 'app/';
const testOutput = buildOutput + 'test/';
const concatFileName = 'all.js';
const typescriptSources = 'app/ts/**/*.ts';

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

function compileTypescript() {
  const sourceFilter = filter(['app/ts/**/*.js', '!app/ts/**/*.spec.js']);
  const testFilter = filter(['app/ts/**/*.spec.js']);

  var sourceResult = gulp
    .src(['app/ts/**/*.module.ts', 'app/ts/**/*!(component).ts', 'app/ts/**/*.component.ts'])
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
  return gulp.watch(typescriptSources, ['compile-ts']);
});

gulp.task('default', ['compile-ts', 'install-bower-components', 'copy-css', 'copy-html']);