'use strict';

const mongoose = require('mongoose');

function Mongoose(config) {
  return mongoose.connect(config.get('mongo').url).then(() => mongoose);
}

Mongoose.deps = ['config'];
module.exports = Mongoose;
