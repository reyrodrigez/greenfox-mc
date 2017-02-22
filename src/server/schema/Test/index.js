import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} from 'graphql';

const Request = new GraphQLObjectType({
  name: 'Request',
  fields: {
    url: {
      type: GraphQLString,
    }
  }
})

const Message = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    message: {type: GraphQLString},
  }),
})


function Test() {
  const db = [{url: 'value'}];
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        request: {
          type: Request,
          args: {
            id: {
              name: 'id',
              type: new GraphQLNonNull(GraphQLInt)
            }
          },
          resolve(obj, args) {
            return db[args.id];
          }
        }
      }
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: {
        registerRequest: {
          type: Message,
          args: {
            url: {type: GraphQLString}
          },
          resolve(parent, data) {
            db.push(data);
            return {message: 'Successful registration'};
          }
        }
      }
    })
  });
}

module.exports = Test;
