'use strict';

const gracefulExit = require('../utils/graceful_exit_util');
const log = require('../services/logger_service');

module.exports = function errorMiddleware(err, req, res) {
  log.fatal(err);
  res.status(500).json({ message: 'Internal Error Occured.' });
  return gracefulExit(err);
};
