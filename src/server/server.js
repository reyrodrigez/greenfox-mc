import container from './container';

require('dotenv').config()
const path = require('path');
require("babel-core/register");
require("babel-polyfill");
const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(async (req, res, next) => {
    const monitor = container.get('requestmonitor');
    await monitor.registerIncomingRequest();
    next();
  }
);

app.use('/stats', async (req, res, next) => {
  const monitor = container.get('requestmonitor');
  const result = await monitor.getStatistics()
  res.send(result);
});

app.use('/', express.static(path.join(__dirname, process.env.PUBLIC_DIR)))

app.listen(8080, function () {
    console.log('Server listening on port 8080!')
})
