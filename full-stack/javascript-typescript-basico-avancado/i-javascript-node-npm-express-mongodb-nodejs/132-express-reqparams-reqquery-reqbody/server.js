const express = require('express');
const app = express();

//Permitir que a requisição armazene os dados de form no req.body
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

// profiles/123456?campanha=googleads&nome_campanha=seila

app.get('/', (req, res) => {
    res.send(`<form action =  "/" method="POST"> 
    Nome: <input type="text" name="nome">
    Outro campo: <input type="text" name="aquioutrocampo">
    <button> Enviar </button>`)
});

app.post('/', (req, res) => {
    console.log(req.body); //
    res.send(`O que você me enviou foi: ${req.body.nome}`);
})

app.get('/testes/:users_id?/:parametro?', (req, res) => {
    console.log(req.params); //PArtes que vem na rota da URL /profiles/2
    console.log(req.query); //NA QUERY String na URL /profiles/?chave1=valor1&chave2=valor2
    res.send(req.params);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});