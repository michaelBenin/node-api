'use strict';

const typeDetect = require('type-detect');
const gracefulExit = require('../../src/utils/graceful_exit_util');
const expect = require('chai').expect;

describe('#closeConnections tests', function () {
  it('Should close connections without error.', function (done) {
    this.timeout(10000);
    expect(typeDetect(gracefulExit)).to.equal('function');
    gracefulExit(null, true);
    done();
  });
});

