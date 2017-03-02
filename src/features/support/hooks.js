'use strict';

import 'babel-polyfill';
export default function () {

  this.Before(async function () {
    const cache = this.container.get('cache');
    await cache.flushAll();

    const mongo = this.container.get('mongo');
    const database  = await mongo.getConnection();
    await database.connection.db.dropDatabase();

    const queue = this.container.get('queue');
    await queue.remove('test-queue');
  });

}
