'use strict';

const gracefulExit = require('express-graceful-exit');
const log = require('../services/logger_service');
const expressService = require('../services/express_service');
const getRedis = require('../services/redis_service').getClient;

module.exports = function gracefullyShutdown(err, kill) {
  const redis = getRedis();
  const server = expressService.createOrGetServer();
  const app = expressService.app;

  if (err) {
    log.info(`Process exiting because of error: ${err.message}`);
    log.fatal(err.stack, err.message);
  } else {
    log.info('Exiting without error.');
  }

  if (redis && redis.quit) {
    redis.quit();
    log.info('Closed redis connections.');
  }

  if (!kill) {
    gracefulExit.gracefulExitHandler(app, server);
  } else {
    server.close();
  }
};
