'use strict';

const bunyan = require('bunyan');
const config = require('../config');

const logger = bunyan.createLogger(config.get('bunyanLogger'));

module.exports = logger;
