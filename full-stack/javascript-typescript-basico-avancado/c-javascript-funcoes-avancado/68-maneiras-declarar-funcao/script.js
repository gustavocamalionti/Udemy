// Declaração de função (Function Hoisting)
// Ao declarar função da forma abaixo, a enginne do javascript elevará as declarações 
// de função e variaveis com var no topo do arquivo javascript

falaOi();
function falaOi() {
console.log('Oie');
}

// Funções são objetos de primeira classe (First-Class Objects)
// Function Expression
const nome = 'Luiz';

const souUmDado = function () {
    console.log('sou um dado');
}

souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo: ')
    funcao();
}

executaFuncao(souUmDado)

// Arrow Function (ES6)
const arrowFunction = () =>  {
    console.log ('Sou uma arrow function');
}

arrowFunction();

//OBJETOS
// Dentro de um objeto
// Forma antiga
// const obj = {
//     falar:function() {
//         console.log('Estou falando...');
//     }
// };

// obj.falar();

// Forma nova
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};



obj.falar();