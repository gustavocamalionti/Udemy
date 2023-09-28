const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');


//Permitir que a requisição armazene os dados de form no req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

// Precisa indicar ao express a pasta das views e qual engine irá utilizar
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//TODAS AS ROTAS TERÃO O MEUMIDDLEWARE _GLOBAL
// Nossos próprios middlewares
app.use(middlewareGlobal);
// app.use(outroMiddleware);
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});