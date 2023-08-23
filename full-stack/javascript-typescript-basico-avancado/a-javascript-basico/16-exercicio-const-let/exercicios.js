
// Escreva a frase "Luiz Otávio Mirando tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.92302491. Luiz Otávio nasceu em 1980".

const nome = 'Gustavo';
const sobrenome = 'Camalionti Gomes'
let idade = '24';
let peso = '89';
let alturaEmMetros = '1.78';
let imc = parseFloat(peso / (alturaEmMetros * alturaEmMetros));
let date = new Date;
let anoNascimento = date.getFullYear() - idade ;

// Template strings
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' tem ' + alturaEmMetros + ' de altura e seu IMC é de ' + imc + '.');
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento);

// Melhor forma 
console.log(`Olá, meu nome é ${nome} ${sobrenome}. Seja bem vindo!`)