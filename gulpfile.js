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
const nodeModulesDest = appBuildOutput + 'node_modules/';
const testOutput = buildOutput + 'test/';
const concatFileName = 'all.js';
const nodeModulesSrc = './node_modules/';
const typescriptSources = 'app/**/*.ts';

function copyAppFilesWithExtension(ext) {
  gulp
    .src('app/**/*.' + ext)
    .pipe(copy(buildOutput, {}));
}

function copyNodeModules() {
  gulp
    .src(nodeModulesSrc + '**/*.*', { base: nodeModulesSrc })
    .pipe(gulp.dest(nodeModulesDest));
} 

gulp.task('copy-node-modules', function () {
  return copyNodeModules();
});

gulp.task('copy-html', function () {
  return copyAppFilesWithExtension('html');
});

gulp.task('copy-css', function () {
  return copyAppFilesWithExtension('css');
});

function compileTypescript() {
  const sourceFilter = filter(['app/**/*.js', '!app/**/*.spec.js']);
  const testFilter = filter(['app/**/*.spec.js']);

  var sourceResult = gulp
    .src(['app/**/*.!(module).ts', 'app/**/*.ts', 'app/**/*.module.ts'])
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

gulp.task('compile-and-copy', ['compile-ts', 'copy-css', 'copy-html']);

gulp.task('watch', function() {
  return gulp.watch('app/**/*.*', ['compile-and-copy']);
});

gulp.task('default', ['compile-and-copy', 'copy-node-modules']);
