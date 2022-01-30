const baseURL = "https://contro-comercial-default-rtdb.firebaseio.com";
const axios = require('axios');
const userProfile = require('./FirebaseFunctions/userProfile');
const { getDatabase, ref, set } = require("firebase/database");
const {uuid} = require('uuid');

// Initialize Firebase
const { initializeApp } = require("firebase/app");
const firebaseConfig = require('./FirebaseFunctions/firebase');
const fireApp = initializeApp(firebaseConfig);
const db = getDatabase();

const resolvers = {

  Query: {
  
    users: async () => {
      const results = await axios.get(`${baseURL}/users.json`);
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
      const results = await axios.get(`${baseURL}/users.json`);
      const objectIds = Object.values(results.data);
      const y = objectIds.find(x => x.id === Number(id))
      console.log('Y', y);
      return y;
    }

  },

  Mutation: {
  addUser: async (root, args) => {
  const id = uuid();
  const user = { ...args, id: id }
  await set(ref(db, 'users/' + args.email.replace(".", "")), user );
}
  }
};
  
module.exports = resolvers;
