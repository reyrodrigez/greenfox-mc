'use strict';

const di = require('lab-di')();
di.registerModule(require('lab-config'), 'config');
di.registerModule(require('lab-config/implementations/memory'), 'config-memory');

const app = require('./app');
const store = require('./store');

const root = require('./components/root');

di.registerModule(app, 'App');
di.registerModule(store, 'Store');
di.registerModule(root, 'Root');

module.exports = di;
