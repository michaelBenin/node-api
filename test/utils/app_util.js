'use strict';

const server = require('../../src/services/express_service');
const supertestPromised = require('supertest-as-promised');

const app = server.app;

module.exports = supertestPromised.agent(app);
