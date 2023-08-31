// 705.484.450-52 

/*


//PRIMEIRO PASSO, MULTIPLICAR OS 9 PRIMEIRO DIGITOS PELA SEQUENCIA NUMERICA (10,9,8,7,6,...)

7 x 10 = 70
0 x 9 = 0
5 x 8 = 40
4 x 7 = 28
8 x 6 = 48
4 x 5 = 20
4 x 4 = 16 
5 x 3 = 15
0 x 2 = 0

total1 = 237

11 - (total1 % 11) = 5 (PRIMEIRO DIGITO);

CONDIÇÃO: Se o resultado de 11 - (total1 % 11) for > 9, então ele assume valor 0

//SEGUNDO PASSO, MULTIPLICAR OS 10 PRIMEIRO DIGITOS PELA SEQUENCIA NUMERICA (11,9,8,7,6,...)
7 x 11 = 77
0 x 10 = 0
5 x 9 = 45
4 x 8 = 32
8 x 7 = 56
4 x 6 = 24
4 x 5 = 20 
5 x 4 = 20
0 x 3 = 0
5 X 2 = 10

total2 = 284

11 - (total2 % 11) = 2 (SEGUNDO DÍGITO)

CONDIÇÃO: Se o resultado de 11 - (total1 % 11) for > 9, então ele assume valor 0

TERCEIRO PASSO: Comparar o CPF GERADO COM O CPF INFORMADO(COM OS NOVOS DIGITOS), SE BATER ENTÃO ELE É VÁLIDO.
*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); //TUDO QUE NÃO FOR UM NÚMERO É SUBSTITUIDO POR NADA.
console.log(cpfLimpo);

cpfArray = Array.from(cpfLimpo) //transformar a string em array

console.log(cpfArray.map(el => el));
console.log(cpfArray.reduce((count, value) => count + Number(value), 0));