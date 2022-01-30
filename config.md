# Proyecto Centro Comercial Virtual

Instalación
npm inti --yes

Dependencias de Desarrollo
npm instal apollo-server apollo-server-express axios dotenv express firebase graphql

Dependencias de Producción
npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon

Configuración del archivo .babelrc

{
    "presets": [
        [ "@babel/env" ]
    ]
}

Configuración para producción package.json
    "start": "node src/server.js"
Configuración para desarrollo package.json
    "dev": "nodemon src/server.js --exec babel-node --watch src"





Backend
Firebase Realtime Database Storage
GraphQl



Repositorio Github
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/EBERSHR/virtualccback.git

Deploy
sudo snap install --classic heroku
git init
heroku git:remote -a virtualccback
git add .
git commit -am "Deploy 1"
git push heroku master
You can now change your main deploy branch from "master" to "main" for both manual and automatic deploys, please follow the instructions here https://help.heroku.com/O0EXQZTA/how-do-i-switch-branches-from-master-to-main

git checkout -b main
git branch -D master
git push heroku main

https://virtualccback.herokuapp.com/

heroku logs --tail

git add .
git commit -m "Actualizaciones"
git push heroku main

    "start": "nodemon src/server.js --exec babel-node"


Conexción con firebase
https://firebase.google.com/docs/web/setup?hl=es
https://firebase.google.com/docs/database/web/read-and-write
https://www.youtube.com/watch?v=KnAsYNhI_CY



Añadir en un archivo firebase.js las credenciales del proyecto

Referenciar una base de datos
    import { getDatabase } from "firebase/database";
    const database = getDatabase();

Escribir datos
    import { getDatabase, ref, set } from "firebase/database";

    function writeUserData(userId, name, email, imageUrl) {
        const db = getDatabase();
        set(ref(db, 'users/' + userId), {
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }

Leer datos
    import { getDatabase, ref, onValue} from "firebase/database";

    const db = getDatabase();
    const starCountRef = ref(db, 'posts/' + postId + '/starCount');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        updateStarCount(postElement, data);
    });


Para los hashed id
npm install uuid









Código muerto para pruebas

    // users: async () => {
    //   const dbRef = ref(db);
    //   get(child(dbRef, "data"))
    //   .then(snapshot => {
    //     console.log('SNAPSHO.VAL:::::', snapshot.val())
    //     const values = Object.values(snapshot.val());
    //     console.log('VALUES::::', values)
    //     const mappedValues = values.map(item => {
    //       //  const graphqlUser = userProfile(item)
    //       // return graphqlUser
    //       console.log('ITEM::::::', item)
    //     })
    //     return mappedValues;
    //   });
    // } 



    // const getData = () => {
//   const dbRef = ref(db);
//   get(child(dbRef, "data"))
//   .then(snapshot => {
//     console.log('SNAPSHOT(VAL)', snapshot.val())
//   });
// }

// getData();


graphql

https://www.youtube.com/watch?v=3vldzoNRz-8&t=923s



Para el manejo de graphql
1. Definir los tipos de datos 
    En el archivo typeDefs,js definimos los campos de datos
    Para la referencia de usuarios:
            id: String!                 - id Automático en formato uuid                 
            user: String                - Alias del usuario
            rol: String                 - De cómo se desempeña en la empresa
            password: String            - Clave secreta
            phone: []                   - Con capacidad para varios número fijos
            mobile: []                  - Con capacidad para varios número móbiles
            names: String               - Nombres del usuario
            lastNames: String           - Apellidos del usuario
            addresses: []               - Con capacidad para varias direcciones
            postCode: String            - Código postal de área
            city: String                - Ciudad 
            country: String             - País
            deliveryAddress: String     - Dirección de entrega de productos
            email: String               - Correo electrónico
            birthDate: Date             - Fecha de nacimiento           
            age: Int                    - Edad en automático para estadísticas
            identityCard: String        - Cédula o número de identidad
            sex: String                 - Sexo
            creditCards: []             - Con capacidad para varios números de tarjetas
            wallets: [],                - Con capacidad para varias wallet addresses
            storeId: String             - Id de la empresa afín
            registerDate: timeStamp     - Fecha de registro inicial
            active: Boolean             - Para el borrado lógico.

Tipos de datos:

 String, Int, Float, Boolean,

 mutation 
  {
  addUser(
    user: "EBERSHR", 
    rol: "SuperUsuario", 
    password: "123", 
    phone: "", 
    mobile: "", 
    names: "Eber Sabás", 
    lastNames: "Hernández Regalado", 
    addresses: "Dirección de Habitación # 12", 
    postCode: "501500", 
    city: "Bello", 
    country: "Colombia", 
    deliveryAddress: "Dirección de entrega", 
    email: "ebershr@gmail.com", 
    birthDate: "13/05/71", 
    age: 50, 
    identityCard: "11711897", 
    sex: "Masculino", 
    creditCards: "", 
    wallets: "", 
    storeId: "", 
    registerDate: "", 
    active: true, 
    image: ""
     ) 
    {
    active
    addresses
    age
    birthDate
    city
    country
    creditCards
    deliveryAddress
    email
    id
    identityCard
    image
    lastNames
    mobile
    names
    password
    phone
    postCode
    registerDate
    rol
    sex
    storeId
    user
    wallets
  }
}