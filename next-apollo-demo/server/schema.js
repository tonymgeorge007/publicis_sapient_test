const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql')
const faker = require('faker')


const users = [];

for (i=0; i<20; i++) {

  let user =  {
    name : faker.name.findName(),
    email: faker.internet.email(),
    phone : faker.phone.phoneNumber(),
    jobTitle : faker.name.jobTitle(),
    image : faker.image.dataUri()
  }
  users.push(user);
}

var person = new GraphQLObjectType({
  name: 'person',
  fields: {
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    phone: {
      type: GraphQLString
    },
    jobTitle: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    }
  }
});

var personList = new GraphQLObjectType({
  name: 'PersonList',
  fields: () => ({
    title: { type: new GraphQLList(person),
    resolve() {
      return users;
    }},
    
  })
});



module.exports = new GraphQLSchema({
  query: personList
})
