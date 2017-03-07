const QUEUE_NAME = "incomingRequest";
const CACHE_NAME = "totalIncomingRequests";

function RequestMonitor(cache, store, queue) {

  async function registerIncomingRequest(req) {
    const now = Date.now();
    const url = req.url;
    const request = await store.getSchema('Request');
    await request.query(
      `mutation Mutation($url: String!) {
        registerRequest(url: $url) {
          message
        }
      }`,
      {url}
    );
    queue.publish(QUEUE_NAME, { "url" : req.url, "params": req.query, "time": now });
  }

  async function getRequests() {
    const request = await store.getSchema('Request');
    const result = await request.query(`query{request{url}}`);
    return result.data.request;
  }

  async function getStatistics() {
    return {
      totalIncomingRequests: await cache.get(CACHE_NAME)
    }
  }

  return Object.freeze({
    registerIncomingRequest,
    getRequests,
    getStatistics
  });
}

RequestMonitor.deps = ['cache', 'store', 'queue'];

module.exports = RequestMonitor;
