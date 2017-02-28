'use strict'

import _ from 'lodash';
import validate from '../../../lib/validate';
import VError from 'verror';

function MemoryCache () {
  let cache = {};

  function get(key, defaultValue) {
    return _.get(cache, key, defaultValue);
  }

  function increment(key, amount) {
    validate.string(
      key,
      new VError(`[Cache] You have to use string as a key, got "${key}" (${typeof key})`)
    );
    validate.number(
      amount,
      new VError(
        `[Cache] Can not increment key "${key}" with not a number value: ${amount}`
      )
    );
    _.set(cache, key, get(key, 0) + amount);
  }

  function flushAll() {
    cache = {};
  }

  async function deleteKey(key) {
    await delete cache[key];
  }

  return Object.freeze({
    get: get,
    increment,
    flushAll,
    deleteKey
  });
}

module.exports = MemoryCache;
