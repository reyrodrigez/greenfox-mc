import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

const RequestType = new GraphQLObjectType({
  name: 'Request',
  fields: {
    url: {
      type: GraphQLString,
    }
  }
});

const Message = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    message: {type: GraphQLString},
  }),
});

async function Request(mongo) {
  const db = await mongo.getConnection();
  const requestSchema = db.Schema({ url: String });
  const RequestMongo = db.model('Request', requestSchema);
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        request: {
          type: new GraphQLList(RequestType),
          async resolve() {
            return await RequestMongo.find({});
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
          async resolve(parent, data) {
            const newRequest = new RequestMongo(data);
            const result = await newRequest.save();
            if (result._id) {
              return {message: 'Successful registration'};
            }
            return {error: 'Unsucccessful registration'};
          }
        }
      }
    })
  });
}

Request.deps = ['mongo'];
module.exports = Request;
