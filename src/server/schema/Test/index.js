import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

function Test() {
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        test: {
          type: GraphQLString,
          resolve() {
            return 'value';
          }
        }
      }
    })
  });
}

module.exports = Test;
