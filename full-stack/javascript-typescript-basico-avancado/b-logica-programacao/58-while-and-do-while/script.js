// Utilizar laço for geralmente sabe o tamanho do elemento.
// Utilizar laço While geralmente não sabemos quantas vezes a repetição irá ocorrer até que ele termine.
// WHILE - ENQUANTO A CONDIÇÃO FOR VERDADEIRA, IRÁ EXECUTAR.
// DO WHILE - EXECUTAR O CÓDIGO PRIMEIRO E DEPOIS CHECAR A CONDIÇÃO. Executa pelo menos 1 vez sempre
const nome = 'Luiz'
let index = 0;


//Começar no 0 e terminar no 10
while (index <= 10) {
    console.log(index);
    index++;
}

console.log('Segue a vida...');

let index2 = 0;
while (index2 < nome.length){
    console.log(nome[index2]);
    index2++;
}

console.log('--------------------------------');

//Exemplo Real
function random(min,max){
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min,max);

console.log(rand !== 10);
console.log('--------------------------------');
console.log(rand);
console.log('--------------------------------');

//WHILE
while (rand !== 10) {
    rand = random(min,max);
    console.log(rand);
}

//DO WHILE - executa pelo menos uma vez sempre!

do { rand = random(min,max);
    console.log(rand);

} while(rand!==10);