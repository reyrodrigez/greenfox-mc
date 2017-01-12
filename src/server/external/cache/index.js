'use strict';

function Cache(container) {
  const implementation = container.get('config').get(Cache.serviceName);
  return container.getImplementation(Cache.serviceName, implementation);
}

Cache.type = 'factory';
module.exports = Cache;
