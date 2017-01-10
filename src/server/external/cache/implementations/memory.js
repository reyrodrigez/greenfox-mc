'use strict'

const _ = require('lodash');

function MemoryCache () {
  let cache = {};

  function get(key, defaultValue) {
    return _.get(cache, key, defaultValue);
  }

  function increment(key, amount) {
    if (!_.isString(key)) {
      throw new Error(`You have to use string for key, got ${key}`);
    }
    if (!_.isFinite(amount)) {
      throw new Error(`Can not increment key "${key}" with not a number value: ${amount}`);
    }
    _.set(cache, key, get(key, 0) + amount);
  }

  function flushAll() {
    cache = {};
  }

  return Object.freeze({
    get: get,
    increment,
    flushAll
  });
}

module.exports = MemoryCache;
