const path = require('path'); //Existe por padrão no node, portanto n precisa de ./
const axios = require('axios');
const { Pessoa } = require('./mod2'); // exige ./


const p1 = new Pessoa('Luiz');
console.log(p1);

axios('https://reqbin.com/echo/get/json').then(response => console.log(response)).catch(e => console.log(e));