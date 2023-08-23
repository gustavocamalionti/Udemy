const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string - Permite aspas simples 
const nome2 = `Luiz`; // string - Permite template strings ${variavel}
const num1 = 10; // number
const num2 = 10.52; //number
let nomeAluno; // undefined -> Não aponta para local nenhum na memória
let sobrenomeAluno = null;  // Nulo ->  Não aponta para local nenhum na memória
const aprovado = true; // boolean = true, false;

console.log(typeof nome, nome);
console.log(typeof num2, num2);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);

let a = [1,2];
const b = a;

console.log(a,b);

// O valor adicionado em b também foi adicionado em a, valores por referência.
// A lógica é, b aponta para o mesmo local que a aponta na memória. ambos apontam para o mesmo lugar na memória.
b.push(3);
console.log(a,b);