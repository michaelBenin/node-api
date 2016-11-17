'use strict';

const ping = require('../../controllers/health_check/ping_controller');

module.exports = (router) => {
  router.get('/api/v1/ping', ping);
};
