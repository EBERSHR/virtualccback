Proyecto Centro Comercial Virtual

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

Configuración para desarrollo package.json
    "start": "nodemon src/server.js --exec babel-node --watch src"
Configuración para desarrollo package.json
    "start": "node src/server.js"





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
git commit -am "Deploy testing"
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