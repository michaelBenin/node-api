'use strict';

const config = require('../config');
const promisifyAll = require('bluebird').promisifyAll;
const redis = require('redis');
require('hiredis');

promisifyAll(redis.RedisClient.prototype);
promisifyAll(redis.Multi.prototype);
let redisService = false;

exports.connectClient = function connectRedis() {
  if (redisService) {
    return redisService;
  }

  redisService = redis.createClient(config.get('redis'));
  return redisService;
};

exports.getClient = function getClient() {
  return redisService;
};
