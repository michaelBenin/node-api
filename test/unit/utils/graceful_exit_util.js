'use strict';

const expect = require('chai').expect;
const type = require('type-detect');
const gracefulExitUtil = require('../../../src/utils/graceful_exit_util');

describe('#gracefulExitUtil unit tests: ', function () {
  it('should be a function.', function () {
    expect(type(gracefulExitUtil)).to.equal('function');
  });
});
