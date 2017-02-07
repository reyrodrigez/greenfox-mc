import { graphql } from 'graphql';

function Store(container){
  function Schema(schema) {
    async function query(query) {
      return await graphql(schema, query);
    }
    return Object.freeze({
      query
    });
  }

  function getSchema(name) {
    return Schema(container.get(name));
  }

  return Object.freeze({
    getSchema
  });

}

Store.type = 'factory';
module.exports = Store;
