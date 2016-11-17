'use strict';

const expect = require('chai').expect;
const type = require('type-detect');
const expressService = require('../../../src/services/express_service');

const createOrGetServer = expressService.createOrGetServer;
const app = expressService.app;

describe('#expressService unit tests: ', function () {
  it('createOrGetServer should be a function', function () {
    expect(type(createOrGetServer)).to.equal('function');
  });

  it('app should be a function', function () {
    expect(type(app)).to.equal('function');
  });
});
