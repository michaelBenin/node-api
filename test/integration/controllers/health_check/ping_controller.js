'use strict';

const server = require('../../../utils/app_util');
const expect = require('chai').expect;

describe('Ping controller/route test', function () {
  this.timeout(1000);

  it('Should give the correct response or ping', function () {
    return server
      .get('/api/v1/ping')
      .expect(200)
      .then((res) => {
        expect(res.header['x-powered-by']).to.equal(undefined);
      }).catch((err) => {
        throw err;
      });
  });
});
