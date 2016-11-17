'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const config = require('./../configs/config');

gulp.task('dev-server', function devServer() {
  nodemon(config.nodemon)
    .on('log', function handleLogEvent(event) {
      gutil.log(event.colour);
    })
    .on('start', function handleStartEvent() {
      gutil.log('Nodemon starting server.');
    })
    .on('exit', function handleExitEvent() {
      gutil.log('Nodemon script exiting.');
    })
    .on('crash', function handleCrash() {
      gutil.log('Nodemon script crashed for some reason');
    });
});
