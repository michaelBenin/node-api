'use strict';

const setRoutes = require('../utils/router_util');
const path = require('path');
const Router = require('express').Router;

const router = new Router();
const globDir = path.join(__dirname, '../routes/**/*.js');

setRoutes(globDir, router);

module.exports = router;
