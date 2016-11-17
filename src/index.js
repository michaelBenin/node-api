'use strict';

require('./utils/load_env_var_util');
require('./utils/uncaught_exception_util');
const config = require('./config');
const express = require('./services/express_service');
const log = require('./services/logger_service');
const serviceInitializer = require('./initializers');
const doGracefulExit = require('./utils/graceful_exit_util');
const errorMiddleware = require('./middleware/error_middleware');

const app = express.app;
const createOrGetServer = express.createOrGetServer;
const setServer = express.setServer;

process.send = process.send || (() => {});

const port = config.get('express.port');

app.use(errorMiddleware);

function startServer() {
  const server = createOrGetServer().listen(port, () => {
    log.info({
      port
    }, 'Server is running.');
  });
  process.send('online');
  setServer(server);
}

function serverError(err) {
  log.fatal(err, err.message);
  doGracefulExit(err);
}

log.info('Server is booting.');

module.exports = function entryPoint() {
  return serviceInitializer()
    .then(startServer)
    .catch(serverError);
};
