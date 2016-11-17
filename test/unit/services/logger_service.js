'use strict';

const expect = require('chai').expect;
const type = require('type-detect');
const log = require('../../../src/services/logger_service');

describe('#loggerService unit tests: ', function () {
  ['info', 'warn', 'error', 'fatal'].forEach(function (method) {
    it(`logger should have method ${method}.`, function () {
      expect(type(log[method])).to.equal('function');
    });
  });
});
