'use strict';

const P = require('bluebird');
const redisReady = require('./redis_initializer');

module.exports = function init() {
  return P.all([
    redisReady()
  ]);
};
