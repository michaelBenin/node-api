'use strict';

require('../../src/utils/load_env_var_util');
const initializer = require('../../src/initializers');
const gracefulExit = require('../../src/utils/graceful_exit_util');

describe('#connectsSuccessfully', function () {
  it('Should connect successfully.', function () {
    this.timeout(10000);
    return initializer().then(function () {
    }).catch(function (err) {
      gracefulExit(err);
    });
  });
});
