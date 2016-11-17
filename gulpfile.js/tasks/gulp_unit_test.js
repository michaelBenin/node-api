"use strict";

const mocha = require('gulp-mocha');
const gulp = require('gulp');
const { log } = require('gulp-util');
const config = require('./../configs/config');

gulp.task('unit-test', function serverUnitTeset() {
  return gulp.src(config.test.unit.src, {
    read: false
  }).pipe(mocha())
    .once('error', function handleError(err) {
    log(err);
  });
});
