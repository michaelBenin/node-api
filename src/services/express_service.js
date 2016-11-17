'use strict';

const http = require('http');
const https = require('https');
const express = require('express');
const contentValidator = require('express-content-length-validator');
const bodyParser = require('body-parser');
const expressGracefulExit = require('express-graceful-exit');
const expressBunyanLogger = require('express-bunyan-logger');
const responseTime = require('response-time');

const errorMiddleware = require('../middleware/error_middleware');
const notFoundMiddleware = require('../middleware/not_found_middleware');
const config = require('../config');
const router = require('./router_service');

const app = express();

https.globalAgent.maxSockets = 1000;
http.globalAgent.maxSockets = 1000;

const MAX_CONTENT_LENGTH_ACCEPTED = 9999;

app.use(expressBunyanLogger(config.get('logMiddleware')));
app.use(responseTime());
app.disable('x-powered-by');

// TODO: configure for specific endpoints
app.use(contentValidator.validateMax({
  max: MAX_CONTENT_LENGTH_ACCEPTED,
  status: 400,
  message: 'Exceeds Max Content.'
}));

app.use(expressGracefulExit.middleware(app));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', router);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

let server = false;

function createOrGetServer() {
  if (!server) {
    server = http.createServer(app);
    return server;
  }
  return server;
}

function setServer(runningServer) {
  server = runningServer;
}

exports.app = app;
exports.createOrGetServer = createOrGetServer;
exports.setServer = setServer;
