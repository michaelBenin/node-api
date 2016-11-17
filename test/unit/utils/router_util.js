'use strict';

const expect = require('chai').expect;
const type = require('type-detect');
const routerUtil = require('../../../src/utils/router_util');

describe('#routerUtil unit tests: ', function () {
  it('it should be a function.', function () {
    expect(type(routerUtil)).to.equal('function');
  });
});
