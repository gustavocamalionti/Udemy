//Filter, map, reduce (Funções mais importantes do JAVASCRIPT)
//Filter passa no seu argumento uma função de callback
// FILTER -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.


//Retorne os números maiores que 10 em um novo array
//               0, 1, 2,3,4 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 55, 22, 27];

//FORMA LONGA E NÃO USUAL
//valor,indice,array não precisaria declarar ,porque automaticamente ele é retornado.
// O RETURN PRECISA DE UM VALOR BOOLEAN. VERDADEIRO PARA INCLUIR O VALOR OU FALSE PARA PULAR O VALOR
function callbackFilter(valor, indice, array) {
    // JEITO CORRETO
    return valor > 10;

    // JEITO BURRO
    // if (valor > 10) {
    //     return true;
    // } else {
    //     return false;
    // }
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

//FORMAS MAIS COMUNS
const numerosFiltrados2 = numeros.filter(function (valor) {
    return valor > 10;
})

console.log(numerosFiltrados2);


// #FORMA 1
// const numerosFiltrados3 = numeros.filter((valor) => {
//     return valor > 10;
// })

// #FORMA 2
// const numerosFiltrados3 = numeros.filter(valor => {
//     return valor > 10;
// })

// #FORMA 3 - ideal 
const numerosFiltrados3 = numeros.filter(valor => valor > 10);

//UTILIZAR valor, indice, array
const numerosFiltrados4 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
});


console.log(numerosFiltrados3);

console.log('-------------------------------');

// 1. Retorne as pessoas que tem o nome com 6 letras ou mais
// 2. Retorne as pessoas com mais de 50 anos
// 3. Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];


// 1. Retorne as pessoas que tem o nome com 6 letras ou mais
console.log('--------------1--------------')

// let results = pessoas.filter(function (valor) {
// return valor.nome.length >= 6;
// });

let results = pessoas.filter(obj => obj.nome.length >= 6);

console.log(results);
console.log('-----------------------------')

// 2. Retorne as pessoas com mais de 50 anos
console.log('--------------2--------------')

// results = pessoas.filter(function (valor) {
//     return valor.idade > 50;
// });

results = pessoas.filter(obj => obj.idade>50);

console.log(results);
console.log('-----------------------------')

// 3. Retorne as pessoas cujo nome termina com a
console.log('--------------3--------------')

// results = pessoas.filter(function (valor) {
//     return valor.nome.toLowerCase().endsWith('a');
// });

results = pessoas.filter(obj => valor.nome.toLowerCase().endsWith('a'));

console.log(results);
console.log('-----------------------------')