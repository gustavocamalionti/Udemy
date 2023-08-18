/**
 * Aritméticos
 * + Adição / Concatenação
 * - Subtração 
 * ** Potenciação
 * % Resto da Divisão
 * / Divisão
 */

const num1 = '5';
const num2 = 10;
console.log(num1 + num2); //510

let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);

// diferença entre contador++ ou ++contador
// Mesmo valor
// pré ++ - primeiro faz a conta e depois retorna o valor
// pos ++- executa a ação primeiro e depois faz o inclemento;
let preContador = 0;
let contadorPos = 0;
console.log(++preContador)
console.log(contadorPos++);

// Incremento = ++
// Decremento == --

//Somais mais de 1 valor
const step = 50;
contador = contador + step;
console.log(contador);
contador = contador + step;
console.log(contador);
contador = contador + step;
console.log(contador);

//atalho pra soma de outros valores
contador += step; // é exatamente igual à: contador = contador + 50;