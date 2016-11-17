'use strict';

/**
 * Configuration module which allows a centralized location for retrieving config properties.
 * @module config
 */
// Defaults configuration to development if not provided
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

const path = require('path');
const _ = require('lodash');
const base = require('./base');

const conf = require(path.join(__dirname, process.env.NODE_ENV));

const configuration = _.defaultsDeep(
  { env: process.env.NODE_ENV },
  conf,
  base
);

class Config {

  static get(property) {
    return _.get(configuration, property);
  }

  static set(property, value) {
    return _.set(configuration, property, value);
  }

}

module.exports = Config;
