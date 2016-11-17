'use strict';

const glob = require('glob');

module.exports = function setRoutes(globDir, router) {
  glob.sync(globDir)
    .map(require)
    .forEach(function setRoute(routeFunc) {
      routeFunc(router);
    });
};
