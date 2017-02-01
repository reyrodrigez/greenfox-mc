'use strict';

import { expect } from 'chai';

export default function () {
  this.When('the system get an Incoming request', async function () {
    const monitor = this.container.get('requestmonitor');
    await monitor.registerIncomingRequest();
  });

  this.Then('I see "$value" for "$key" in the statistics', async function(value, key) {
    const monitor = this.container.get('requestmonitor');
    const result = await monitor.getStatistics();
    expect(result[key]).to.eql(parseInt(value));
  });
}
