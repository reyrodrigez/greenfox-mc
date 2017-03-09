'use strict';

import { expect } from 'chai';

export default function () {
  this.When('the system get an Incoming request', async function () {
    const monitor = this.container.get('requestmonitor');
    await monitor.registerIncomingRequest('url');
  });

  this.When('the system recalculate the requests', async function () {
    const monitor = this.container.get('requestmonitor');
    await monitor.recalculate();
  });

  this.Then('I see "$value" for "$key" in the statistics', async function(value, key) {
    const monitor = this.container.get('requestmonitor');
    const result = await monitor.getStatistics();
    expect(result[key]).to.eql(parseInt(value));
  });

  this.Then('I see "$value" request in the database', async function(value) {
    const monitor = this.container.get('requestmonitor');
    const result = await monitor.getRequests();
    expect(result.length).to.eql(parseInt(value));
  });

}
