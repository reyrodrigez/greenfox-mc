
function RequestMonitor(cache) {

  async function registerIncomingRequest(url, params, time) {
    await cache.increment('totalIncomingRequests', 1);
  }

  async function getStatistics() {
    return {
      totalIncomingRequests: await cache.get('totalIncomingRequests')
    }
  }

  return Object.freeze({
    registerIncomingRequest,
    getStatistics
  });
}

RequestMonitor.deps = ['cache'];

module.exports = RequestMonitor;
