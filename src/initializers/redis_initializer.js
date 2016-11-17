'use strict';

const P = require('bluebird');
const connectRedis = require('../services/redis_service').connectClient;
const log = require('../services/logger_service');

module.exports = function initRedis() {
  return new P(function redisReadyPromise(resolve, reject) {
    const redis = connectRedis();

    function handleRedisError(error) {
      reject(error);
    }

    if (!redis) {
      return handleRedisError(new Error('Redis is not connecting.'));
    }

    redis.on('error', handleRedisError);

    redis.on('ready', function handleRedisReady() {
      log.info('Redis connection successful.');
      return resolve(true);
    });
    return redis;
  });
};
