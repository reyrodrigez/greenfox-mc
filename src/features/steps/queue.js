'use strict';

import { expect } from 'chai';

export default function () {
  this.When('I publish "$message" message to queue "$queue"', async function (message, queueName) {
    const queue = this.container.get('queue');
    await queue.publish(queueName, message);
  });

  this.Then('"$queueName" queue contains "$count" message', async function(queueName, count) {
    const queue = this.container.get('queue');
    const size = await queue.getMessageCount(queueName);
    expect(size).to.be.eql(parseInt(count));
  });

  this.When('A process consume the queue "$queueName"', async function (queueName) {
    const queue = this.container.get('queue');
    this.context.promise = new Promise((resolve, reject) => {
      let messageCount = 0;
      const messageHandler = async () => {
        messageCount += 1;
        const size = await queue.getMessageCount(queueName);
        if (size === 0) {
          resolve(messageCount);
        }
      }
      queue.consume(queueName, messageHandler);
    });
  });

  this.Then('I see "$count" processed message', async function(count) {
    const messageCount = await this.context.promise;
    expect(messageCount).to.be.eql(parseInt(count));
  });
}
