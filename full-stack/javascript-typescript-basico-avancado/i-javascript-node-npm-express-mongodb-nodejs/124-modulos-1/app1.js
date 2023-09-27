//Importar tudo do module.exports
// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

//Importar apenas a função específica
// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

//Outra forma
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

//Associação por Desestruturação
const { nome, sobrenome, falaNome} = require('./mod1');
console.log(nome);
console.log(sobrenome);
console.log(falaNome());