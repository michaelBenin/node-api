'use strict';

module.exports = function pingController(req, res) {
  res.json({
    MESSAGE: 'pong',
    // GIT_COMMIT: process.env.GIT_COMMIT,
    // BUILD_NUMBER: process.env.BUILD_NUMBER,
    MEMORY_USAGE: process.memoryUsage(),
    UPTIME: process.uptime()
  });
};
