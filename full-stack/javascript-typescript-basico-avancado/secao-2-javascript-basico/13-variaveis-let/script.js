let nome = 'Roberto'; // Variáveis - Varia

// console.log( nome + ' nasceu em 1984.');
// console.log('Em 2000 ' + nome + ' conheceu Maria.');
// console.log(nome + ' casou-se com Maria em 2012.');
// console.log('Maria teve 1 filho com ' + nome + ' em 2015.');
// console.log('O filho de ' + nome + ' se chama Eduardo.');

console.log( nome, ' nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, ' casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com ', nome, ' em 2015.');
console.log('O filho de ', nome, ' se chama Eduardo.');

let nome1;
console.log(nome1); // undefined = Variavel declarada mas não tem valor até essa execução

let nome2;
nome2 = 'João';
console.log(nome2);

nome2 = 'Otávio';
console.log(nome2);


//REGRAS ou BOAS PRÁTICAS

//Não podemos criar variáveis com palavras reservadas
// let let
// let console
// let if

// Variáveis precisam ter nomes significativos
let n = 'João'; // Está ERRADO!
let nomeCliente = 'João';

// Não pode começar o nome de uma variável com número

// Não podem conter espaços ou traços

// Utilizamos camelCase para variáveis
let nomeCompleto = 'Luiz Otávio';
let nomeCompletoDoCliente;

// Variáveis Case-sensitive (letras maiusculas ou minusculas fazem diferença)
let nomeCliente1 = 'Luiz';
let nomecliente1 = 'Otávio';
console.log(nomeCliente1, nomecliente1);

// Não podemos redeclarar variáveis com let

// NÃO UTILIZE VAR, UTILIZE LET.
