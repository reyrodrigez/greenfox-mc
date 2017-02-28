
function RecalcRequests(cache, requestmonitor) {
    const DB_KEY = 'totalIncomingRequests';

    async function recalculate() {
        const requests = await requestmonitor.getRequests();
        await cache.deleteKey(DB_KEY);
        cache.increment(DB_KEY, requests.length);
    }

    return Object.freeze({
        recalculate
    });
};

RecalcRequests.deps = ['cache', 'requestmonitor'];

module.exports = RecalcRequests;
