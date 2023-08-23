let num1 = 1; //Number
let num2 = 2.5; //Number

console.log(num1.toString()+num2); // Concatenação de uma string com número
console.log(typeof num1); // num1 não foi alterado


num1 = num1.toString(); // Alteração do valor da variável e tipo
console.log(typeof num1);

num3 = 1500;
console.log(num3.toString(2)); //Representação binária

num4 = 10.570531631478307;
console.log(num4.toFixed(2)); // Visualizar apenas 2 casas decimais, 4, 6 ... 

num5 = 10;
console.log(Number.isInteger(num5)); // Verificar se a variável é inteiro

let temp1 = num1 * 'Olá'; //Não existe essa conta
console.log(Number.isNaN(temp1)); //A conta é inválida? True
console.log(Number.isInteger(1.00)); // true, já que é um número redondo

let num6 = 0.7;
let num7 = 0.1;

num6 += num7; // Deveria ser 0.8 -> 0.79999999999999999999999999999999999
num6 += num7; // Deveria ser 0.9 -> 0.89999999999999999999999999999999999
num6 += num7; // Deveria ser 1.0 -> 0.99999999999999999999999999999999999

// num6 = ((num6*100) + (num7*100))/100 // resolve o problema

num6 = num6.toFixed(2);
console.log(num6); //Não resolve o problema! Correto aos nossos olhos, porém se a gente checar o número é inteiro resulta em false .
console.log(Number.isInteger(num6)); // retorna false! sendo que 1.00 para o javascript é considero inteiro! Logo, ele não tem o valor 1.00. Poruq eele considera os binários
num6 = parseFloat(num6); // Resolve o problema, já que forçamos a aproximação
console.log(Number.isInteger(num6));
num6 += num7; // 1.1



