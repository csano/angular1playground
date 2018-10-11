'use strict';

var concat = require('gulp-concat');
var copy = require('gulp-copy');
var filter = require('gulp-filter');
var gulp = require('gulp');
var glob = require('glob');
var browserify = require('browserify');
var sass = require('gulp-sass');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('app/tsconfig.json'); 
var tsify = require('tsify');
var source = require('vinyl-source-stream');

const buildOutput = 'build/';
const appBuildOutput = buildOutput + 'app/';
const nodeModulesDest = appBuildOutput + 'node_modules/';
const testOutput = buildOutput + 'test/';
const concatFileName = 'all.js';
const nodeModulesSrc = './node_modules/';

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

gulp.task('sass', function () {
  return gulp.src('app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(gulp.dest(appBuildOutput + '/css'));
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

        /*
      //.plugin(tsify, { noImplicitAny: true })
      .bundle()
      .pipe(gulp.dest('.'));
      //.pipe(concat(concatFileName))
      //.pipe(gulp.dest(appBuildOutput));
      */
}

gulp.task('browserify', function() {
  var files = glob.sync('app/**/*.ts')
  console.log(files);
  browserify({entries: files})
      .plugin(tsify, { noImplicitAny: false, tsProject: 'tsconfig.json'})
      .bundle()
      .pipe(source(concatFileName))
      .pipe(gulp.dest(appBuildOutput));

});

gulp.task('compile-ts', function () {
  return compileTypescript();
});

gulp.task('compile-and-copy', ['browserify', 'sass', 'copy-html']);

gulp.task('watch', function() {
  return gulp.watch('app/**/*.*', ['compile-and-copy']);
});

gulp.task('default', ['compile-and-copy', 'copy-node-modules']);
