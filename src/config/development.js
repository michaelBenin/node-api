'use strict';

module.exports = {
  express: {
    port: 8000
  },
  bunyanLogger: {
    name: 'node-api'
  },
  logMiddleware: {
    name: 'node-api-express',
    streams: [{
      level: 'info',
      stream: process.stdout
    }]
  },
  redis: {
    port: 6379,
    host: '127.0.0.1'
  },
  StatsD: {
    port: 8125,
    host: '127.0.0.1'
  }
};
