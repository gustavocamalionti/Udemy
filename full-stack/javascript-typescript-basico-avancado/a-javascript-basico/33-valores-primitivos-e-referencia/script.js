/**
 * Primitivos (Imutáveis) - String, number, boolean, undefined, null (bigint, symbol) - Valores Copiados
 */


// Trocando o valor da variável
let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);

nome[0] = 'R'; // Não faz absolutamente nada, a string é imutável;
console.log(nome[0], nome);

//CÓPIA do valor de uma variável para a outra quando o dado for primitivo
let a = 'A';
let b = a; 
console.log(a,b);

a = 'Outra Coisa';

console.log(a,b);

/**
 * Referência (Mutável) - array, object, function - Passados por referência
 */

let numeros = [1,2,3];
let referencia = numeros;
let referencia2 = referencia;
console.log(numeros, referencia);

numeros.push(4);
console.log(numeros, referencia);

numeros.pop();
console.log(numeros, referencia);
console.log(referencia2);

//para copiar o valor de numeros para referencia 3, utilize [...array]. Criando independencia entre os arrays (spread)

let referencia3 = [...numeros];
referencia3.pop();
console.log(numeros, referencia3)

//Para objetos - referencia
const p = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const g = p;

p.nome = 'Gustavo';
console.log(g,p);

//Para objetos - cópia de valores (spread)

u = {...p};
u.nome = 'Roberto';
console.log(p,u);