const express = require('express');
const app = express();
const routes = require('./routes');

//Permitir que a requisição armazene os dados de form no req.body
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});