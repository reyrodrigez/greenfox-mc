'use strict';
import VError from 'verror';
import {first} from '../../../lib/async';
import {handleMessage, encode} from '../lib/message';

function AMQP() {
  const open = require('amqplib').connect('amqp://localhost');
  let channel;

  async function createChannel() {
    const conn = await open.then((conn)=> conn);
    return await conn.createChannel();
  }

  async function getChannel() {
    const create = async () => await createChannel();
    return await first([() => channel, create]);
  }

  async function getMessageCount(queueName) {
    const channel = await getChannel();
    const info = await channel.assertQueue(queueName);
    return info.messageCount;
  }

  async function remove(queueName) {
    const channel = await getChannel();
    await channel.assertQueue(queueName);
    return channel.deleteQueue(queueName);
  }

  async function publish(queueName, message) {
    const channel = await getChannel();
    await channel.assertQueue(queueName);
    return channel.sendToQueue(queueName, encode(message));
  }

  async function consume(queueName, callback) {
    const channel = await getChannel();
    await channel.assertQueue(queueName);
    channel.prefetch(1);
    return channel.consume(queueName, handleMessage(channel, callback));
  }

  return Object.freeze({
    publish,
    consume,
    remove,
    getMessageCount
  });
}

module.exports = AMQP;
