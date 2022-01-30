import express from 'express';
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express';
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const app = express();

app.use(cors());

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
  res.json({ data: "Virtual C.C. API --> is working." });
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log(`server running on port 4000`);
  console.log(`gql path is ${apolloServer.graphqlPath}`);
});