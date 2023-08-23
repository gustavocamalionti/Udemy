let num1 = 9.54578;

console.log(Math.floor(num1)); // Inteiro mais próximo para baixo

console.log(Math.ceil(num1)); // Inteiro mais próximo para cima

console.log(Math.round(num1)); // arredondar pelo mais próximo pelas regras da notação cientifica.

console.log(Math.max(1,2,3,4,-10,-50,1500,9,8,7,6,2)); // Maior número
console.log(Math.min(1,2,3,4,-10,-50,1500,9,8,7,6,2)); // Menor número
console.log(Math.random()); // Numero aleatório entre 0 e 1

const aleatorio = Math.random() *(10-5) + 5; // numero aleatório entre 10 e 5: math.random() * (max - min) + min
console.log(Math.round(aleatorio));

console.log(Math.pow(2,10)); // Péssimo! 
console.log(2 ** 10); // Ideal!

let num2 = 9;

console.log(num1 ** (1/2)); // Raiz quadrada de 9 
console.log(num1 ** 0.5); // Raiz quadrada de 9 

console.log(100/0); //Em outras linguagens de programação geraria um erro. Em javascript, o resultado é infinity e é verdadeiro
console.log(100/0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);
console.log(100/0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001);