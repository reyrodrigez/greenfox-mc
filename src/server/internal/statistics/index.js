const QUEUE_NAME = "incomingRequest";
const CACHE_NAME = "totalIncomingRequests";

function Statistics(cache, queue) {

  async function subscribe() {
    queue.consume(QUEUE_NAME, processMessage);
  }

  async function processMessage(message) {
    await cache.increment(CACHE_NAME, 1);
  }

  async function recalculate() {
    await cache.flushAll();
    const requests = await getRequests();
    await Promise.all(
      requests.map(async () => {
        await cache.increment(CACHE_NAME, 1);
      })
    );
  }

  return Object.freeze({
    subscribe,
    recalculate,
    processMessage
  });
}

Statistics.deps = ['cache', 'queue'];

module.exports = Statistics;
