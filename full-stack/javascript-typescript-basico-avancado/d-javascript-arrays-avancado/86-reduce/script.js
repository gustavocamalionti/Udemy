//Se não mandar um valor inicial, ele assume como o valor do primeiro indice


//               0, 1, 2,3,4... 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let valorInicial = 0;


// Some todos os números (REDUCE)
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    // console.log(acumulador,valor);
    acumulador += valor;
    return acumulador;
}, valorInicial);

console.log(total);

// Retorne um array com os pares (UTILIZE FILTER)
let = valorInicial2 = [];
const listPares = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    }

    return acumulador;
}, valorInicial2)

console.log(listPares);

// Retorne um array com o dobro dos valores (UTILIZE MAP)
const dobroValores = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobroValores);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 77 },
    { nome: 'Wallace', idade: 47 }
]

// Quero que retorne a pessoa mais velha, certo? Nesse caso, quando eu não passo um valorInicial, ele assume como o primeiro item do array. No caso, valorInicial = { nome: 'Luiz', idade: 62 };
let pessoaVelha = pessoas.reduce(function (acumulador, obj, indice, array) {
    if (acumulador.idade > obj.idade) {
        return acumulador;
    }

    //agora o acumulador assume o obj do array que tem idade superior ao acumulador atual.
    return obj;
});

console.log(pessoaVelha);