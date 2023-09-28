require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        console.log('Conectei à base de dados.');
        app.emit('Pronto')
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');


//Permitir que a requisição armazene os dados de form no req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));



const sessionOptions = session({
    secret: 'texto q ninguem vai saber',
    //store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //tempo q vai durar o cookie (7dias)
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING })
});

app.use(sessionOptions);
app.use(flash());

// Precisa indicar ao express a pasta das views e qual engine irá utilizar
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//TODAS AS ROTAS TERÃO O MEUMIDDLEWARE _GLOBAL
// Nossos próprios middlewares
app.use(middlewareGlobal);
// app.use(outroMiddleware);
app.use(routes);


app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})
