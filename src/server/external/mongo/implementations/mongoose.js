'use strict';

const mockgoose = require('mockgoose');

function Mongoose(config) {
  return mongoose.connect(config.get('mongo').url).then(() => mongoose);
}

Mongoose.deps = ['config'];
module.exports = Mongoose;
