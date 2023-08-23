//ECMAScript 2015 (ES6)

//ISSO NÃO DÁ ERRO - PROBLEMÁTICO
var nome = 'Luiz';
var nome = 'Otávio';
console.log(nome);


//ISSO DÁ ERRO! - CORRETO. Por isso é extremamente recomendado só usar let
// let nome = 'Luiz';
// let nome = 'Otávio';

//NÃO FAÇA ISSO
nome2 = 'Luiz'; // CRiação de variável global que pode afetar outras variáveis
