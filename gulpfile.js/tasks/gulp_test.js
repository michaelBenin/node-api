'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const { log } = require('gulp-util');

gulp.task('test', function test(cb) {
  runSequence(
    'js-lint-src',
    'js-lint-test',
    'js-lint-gulp',
    'unit-test',
    'integration-test',
    (err) => {
      if (err) {
        log('[ERROR] gulp build task failed', err);
      }
      return cb(err);
    }
  );
});
