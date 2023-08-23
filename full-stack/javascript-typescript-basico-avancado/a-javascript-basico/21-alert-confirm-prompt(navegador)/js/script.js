alert('Com a nossa mensagem.');
let result = confirm('Deseja realmente apagar?');

if(result == true){
    alert('O usuário aceitou!');
} else {
    alert('O usuário negou!');
}

//EXERCICIO1
const num1 = prompt('Digite um número');
const num2 = prompt('Digite outro número');
let soma = parseFloat(num1) + parseFloat(num2);
alert(`O resultado da sua conta foi: ${soma}`);

//EXERCICIO2
let varA = 'A';
let varB = 'B';
let varC = 'C';

//ERRADO
// varA = varB; // B
// varB = varC; // C
// varC = varA; // B

//CERTO 
// [varA, varB, varC] = [varB,varC,varA];

//CERTO
const varATemp = varA;
varA = varB; // B
varB = varC; // C
varC = varATemp; // B

console.log(varA, varB, varC);