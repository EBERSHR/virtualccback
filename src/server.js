const express = require("express");
const cors = require('cors')
const { gql } = require("apollo-server");
const { ApolloServer } = require("apollo-server-express");
const axios = require('axios');
// import { userProfile } from '../FirebaseFunctions/userProfile';
const { getDatabase, ref, onValue, get, child} = require("firebase/database");
const { initializeApp } = require("firebase/app");
const firebaseConfig = require('./FirebaseFunctions/firebase');
const baseURL = "https://contro-comercial-default-rtdb.firebaseio.com";


// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const db = getDatabase();
const app = express();

app.use(cors());

const typeDefs = gql`
  type User {
    id: Int!
    fullname: String
    email: String!
    location: String
    age: String
    citizen: Boolean
  }
  type Prueba {
    prueba: String
  }
type Query {
    users: [User]
    prueba: Prueba
    findPersonId(id: Int!): User
  }
`;

function userProfile(data) {
  // console.log('DATA::::::', data)
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
        const values = Object.values(results.data);
        const mappedValues = values.map(item => {
           const graphqlUser = userProfile(item);
          return graphqlUser;
        })
        return mappedValues;
    },
    prueba: async () => {
      const results = await axios.get(`${baseURL}/prueba.json`);
      console.log(results.data)
      return results.data;
    },
    findPersonId: async (root, args) => {
      const { id } = args
      const results = await axios.get(`${baseURL}/data.json`);
      const objectIds = Object.values(results.data);
      const y = objectIds.find(x => x.id === Number(id) )
      console.log('Y', y);
      return y;
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

app.get("/", function (req, res) {
    res.json({ data: "Virtual C.C. API - is working." });
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log(`server running on port 4000`);
    console.log(`gql path is ${apolloServer.graphqlPath}`);
});