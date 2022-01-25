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