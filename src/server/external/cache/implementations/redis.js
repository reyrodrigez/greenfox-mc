'use strict';
import Redis from 'ioredis';
import validate from '../../../lib/validate';
import VError from 'verror';

function RedisCache() {
  const redis = new Redis();

  async function get(key, defaultValue) {
    const result = await redis.get(key);
    return parseInt(result);
  }

  async function increment(key, amount) {
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
    await redis.incrby(key, amount);
  }

  async function flushAll() {
    await redis.flushall();
  }

  return Object.freeze({
    get: get,
    increment,
    flushAll
  });
}

module.exports = RedisCache;
