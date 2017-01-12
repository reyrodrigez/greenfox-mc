'use strict';

import 'babel-polyfill';
export default function () {

  this.Before(async function () {
    const cache = this.container.get('cache');
    await cache.flushAll();
  });

}
