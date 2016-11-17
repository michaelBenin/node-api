'use strict';

const expect = require('chai').expect;
const type = require('type-detect');
const redisService = require('../../../src/services/redis_service');

describe('#redisService unit tests: ', function () {
  it('should be false before initialized', function () {
    expect(redisService.getClient()).to.equal(false);
  });

  it('should have method connectClient', function () {
    expect(type(redisService.connectClient)).to.equal('function');
  });
});
