import { graphql } from 'graphql';

function Store(container){
  function Schema(schema) {
    async function query(query, params) {
      return await graphql(schema, query, '', undefined, params);
    }
    return Object.freeze({
      query
    });
  }

  async function getSchema(name) {
    const schema = await container.get(name)
    return Schema(schema);
  }

  return Object.freeze({
    getSchema
  });

}

Store.type = 'factory';
module.exports = Store;
