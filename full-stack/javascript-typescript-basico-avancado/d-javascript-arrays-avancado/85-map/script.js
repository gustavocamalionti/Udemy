//MAP ALTERA OS VALORES E RETORNA A MESMA QUANTIDADE DO ARRAY ORIGINAL.

// Dobre os números
//               0, 1, 2,3,4... 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(function (valor, indice, array) {
//     console.log('valor: ' + valor, 'indice: ' + indice, 'array: ' + array);
//     return valor * 2;
// });

const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);

//Para cada Elemento:
// 1. Retorne apenas uma string com o nome da pessoa
// 2. Remova apenas a chave "nome" do objeto
// 3. Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

// 1
// const apenasNome = pessoas.map(function(valor){
//     return valor.nome;
// });
const apenasNomes = pessoas.map(obj => obj.nome);
console.log(apenasNomes);

// 2
const apenasIdades = pessoas.map(function (obj) {
   return {idade: obj.idade} });
console.log(apenasIdades);

// 3
// Essa forma altera o objeto pessoas (ERRADO!)
// const comIds = pessoas.map(function(obj,indice) {
//     obj['id'] = indice
//     return obj;
// });
// console.log(comIds);
// console.log(pessoas);

const comIds = pessoas.map(function(obj,indice) {
    const newObj = {... obj};
    newObj.id = indice;
    return newObj;
});
console.log(comIds);
console.log(pessoas);