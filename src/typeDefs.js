import { gql } from 'apollo-server';

const typeDefs = gql`

  type User {
            id: String!
            user: String
            rol: String
            password: String
            phone: String
            mobile: String
            names: String
            lastNames: String
            addresses: String
            postCode: String
            city: String
            country: String
            deliveryAddress: String
            email: String
            birthDate: String
            age: Int
            identityCard: String
            sex: String
            creditCards: String
            wallets: String
            storeId: String
            registerDate: String
            active: Boolean
            image: String
  }

  type Prueba {
    prueba: String
  }

  type Query {
    users: [User]
    prueba: Prueba
    findPersonId(id: String!): User
  }

  type Mutation {
    addUser(
      user: String
      rol: String
      password: String
      phone: String
      mobile: String
      names: String
      lastNames: String
      addresses: String
      postCode: String
      city: String
      country: String
      deliveryAddress: String
      email: String
      birthDate: String
      age: Int
      identityCard: String
      sex: String
      creditCards: String
      wallets: String
      storeId: String
      registerDate: String
      active: Boolean
      image: String
    ): User
  }
  
`;

module.exports = typeDefs;