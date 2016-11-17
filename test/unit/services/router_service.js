'use strict';

const expect = require('chai').expect;
const type = require('type-detect');
const routerService = require('../../../src/services/logger_service');

describe('#routerService unit tests: ', function () {
  it('routerService should be a function', function () {
    expect(type(routerService)).to.equal('Object');
  });
});
