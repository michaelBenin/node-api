'use strict';

const mocha = require('gulp-mocha');
const gulp = require('gulp');
const { log } = require('gulp-util');
const config = require('./../configs/config');

gulp.task('integration-test',
  function serverIntegrationTest() {
    return gulp.src(config.test.integration.src, {
      read: false
    }).pipe(mocha())
    .once('error', function handleError(err) {
      log(err);
    });
  });
