import 'babel-polyfill';
import register from 'ignore-styles'

register(['.scss']);
const tools = require('./tools');

export default function() {
  this.World = World;
};

function World() {
  this.context = {};
  this.tools = tools;
  this.container = require('../../client/container');
  this.server = require('../../server/container');
  setupConfig(this.server.default.get('config'));
  setupConfig(this.container.get('config'));
  extendContainer.call(this);
}

function setupConfig(config) {
  config.update('cache', 'memory');
  config.update('mongo', {
    type: 'memory',
    url: 'mongodb://localhost:27017/test'
  });
  config.update('queue', 'memory');
}

function extendContainer() {
  this.container.extend(this.server.default);
}
