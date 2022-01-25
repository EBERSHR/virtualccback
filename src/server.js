const express = require("express");
const { gql } = require("apollo-server");
const { ApolloServer } = require("apollo-server-express");
const axios = require('axios');
// import { userProfile } from '../FirebaseFunctions/userProfile';

const app = express();



const typeDefs = gql`
  type User {
    id: Int
    fullname: String
    email: String!
    location: String
    age: String
    citizen: Boolean
  }
type Query {
    users: [User]
    findUser(id: Int): User
  }
`;

const baseURL = "https://contro-comercial-default-rtdb.firebaseio.com";

function userProfile(data) {
  return {
    id: data.id,
    age: data.age,
    citizen: data.citizen,
    email: data.email,
    fullname: data.fullname,
    location: data.location
  };
}

const resolvers = {
    Query: {
      users: async () => {
        const results = await axios.get(`${baseURL}/data.json`);
        const values = Object.values(results.data)
        const mappedValues = values.map(item => {
           const graphqlUser = userProfile(item)
          return graphqlUser
        })
        return mappedValues;
    },
    findUser: (_, {id}) => {
      User.find((u) => u.id === id)
    } 
    }

  };

let apolloServer = null;

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.get("/rest", function (req, res) {
    res.json({ data: "api working" });
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log(`server running on port 4000`);
    console.log(`gql path is ${apolloServer.graphqlPath}`);
});