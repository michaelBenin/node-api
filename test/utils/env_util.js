'use strict';

require('../../src/utils/load_env_var_util');
const expect = require('chai').expect;

const envVars = [
  'NODE_ENV'
  // expected global environment variables here
];

describe('#env loader: ', function () {
  envVars.forEach(function (evar) {
    it(`Should load env var ${evar} successfully.`, function () {
      expect(process.env[evar]).to.not.equal(undefined);
    });
  });
});
