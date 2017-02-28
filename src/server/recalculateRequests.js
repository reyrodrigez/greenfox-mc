import container from './container';

require("babel-core/register");
require("babel-polyfill");

const recalculateRequests = container.get('recalcrequests');

async function recalculate() {
    await recalculateRequests.recalculate();
    process.exit();
}

recalculate();