'use strict';

import { expect } from 'chai';

export default function () {
  this.When('I increment key "$key" with value "$value"', async function (key, value) {
    const cache = this.container.get('cache');
    await cache.increment(key, parseInt(value));
  });

  this.Then('I get "$value" for key "$key"', async function (value, key) {
    const cache = this.container.get('cache');
    const result = await cache.get(key);
    expect(result).to.eql(parseInt(value));
  });
}
