// Array é uma lista de coisas
const coisas = ['Luiz', 'Maria', 'João', 3, true, null]; // Não é uma boa prática, manter sempre 1 tipo de dado;
console.log(coisas);

const alunos = ['José', 'Marcos', 'Vinícius']; // Boa prática!
console.log(alunos);
console.log(alunos[0]); // José
console.log(alunos[1]); // Marcos
console.log(alunos[2]); // Vinícius

console.log(alunos[0][2]); // José -> s

//Editar um item do array
alunos[0] = 'Eduardo';
console.log(alunos);

//Criar um novo item no array
alunos[3] = 'Luiza';

//Tamanho do Array
console.log(alunos.length)

//adicionar um novo item no final do array
alunos.push('Fábio');
alunos.push('Roberto');
console.log(alunos);

//Adicionar um novo item no começo do array
alunos.unshift('Gustavo');
alunos.unshift('Marcelo');
console.log(alunos);

//Remover o último elemento do array
const removido = alunos.pop();
console.log(alunos);
console.log(`removido: ${removido}`)

//Remover o primeiro elemento do array
const removido2 = alunos.shift();
console.log(alunos)
console.log(`removido: ${removido2}`)

//Apagar um item do array sem alteração dos indices
delete alunos[1];
console.log(alunos);
console.log(alunos[50]); //undefined

alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos[alunos.length-1]);
console.log(alunos.slice(0,3)); 
console.log(alunos.slice(-2)); 
console.log(typeof alunos); // return object
console.log(alunos instanceof Array); // Alunos é uma instância de Array? true
let numero = 1234
console.log(numero instanceof Array); // numero é uma instância de Array? false