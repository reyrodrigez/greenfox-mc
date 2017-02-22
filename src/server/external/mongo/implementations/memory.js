'use strict';

const mockgoose = require('mockgoose');
const mongoose = require('mongoose');

function Memory(config) {
  return mockgoose(mongoose).then(
    () => mongoose.connect(config.get('mongo').url).then(() => mongoose)
  );
}

Memory.deps = ['config'];
module.exports = Memory;
