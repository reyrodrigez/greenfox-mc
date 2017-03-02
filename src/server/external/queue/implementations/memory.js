'use strict'

import _ from 'lodash';
import validate from '../../../lib/validate';
import VError from 'verror';

function MemoryQueue () {
  let queue = {};

  function consume(queueName, callback) {
    async function handleMessages() {
      const message = queue[queueName].shift();
      if (!message) {
        return false;
      }
      await callback(message);
      handleMessages();
    }
    process.nextTick(()=>handleMessages(queueName, callback));
    return true;
  }


  function publish(queueName, message) {
    if (!queue.hasOwnProperty(queueName)) {
      queue[queueName] = [];
    }
    queue[queueName].push(message);
  }

  function getMessageCount(queueName) {
    return Promise.resolve(queue[queueName].length);
  }

  function remove(queueName) {
    delete queue[queueName];
  }

  return Object.freeze({
    publish,
    consume,
    remove,
    getMessageCount
  });
}

module.exports = MemoryQueue;
