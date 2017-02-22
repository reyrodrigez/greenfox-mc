import mongoose from 'mongoose';
import mockgoose from 'mockgoose';

function Mongo(container) {
  mongoose.Promise = global.Promise;
  const implementation = container.get('config').get(Mongo.serviceName).type;
  const connection = container.getImplementation(Mongo.serviceName, implementation);
  return Object.freeze({
    async getConnection () {
      return await connection;
    }
  });
}

Mongo.type = 'factory';

module.exports = Mongo;
