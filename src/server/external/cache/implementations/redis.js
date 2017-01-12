'use strict';
const Redis = require("ioredis");

function RedisCache() {
  const redis = new Redis();

  async function get(key, defaultValue) {
    const result = await redis.get(key);
    return Promise.resolve(parseInt(result));
  }

  async function increment(key, amount) {
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
