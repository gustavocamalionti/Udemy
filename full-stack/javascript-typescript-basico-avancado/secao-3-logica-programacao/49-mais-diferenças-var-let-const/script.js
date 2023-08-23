// let cria uma variável
// var cria uma variável

//Não é possível redeclarar let com o mesmo nome de variável
// let nome = 'Gustavo';
// let nome = 'Luiz';


const verdadeira = true;

// Como pode a variável nome ser do tipo let e mesmo assim acontecer a redeclaração quando envolvemos ela em um novo bloco?
// let tem escopo de bloco { ... bloco }
// var só tem escopo de função
// Justamente isso, let é uma variável de bloco, ou seja, o motor javascript sempre prioriza o bloco de execução.
// se não encontrar, irá para o próximo bloco até o escopo global.


let nome = 'Luiz'; // Criando
var nome2 = 'Luiz'; // criando


if(verdadeira){
    let nome = 'Otávio'; // Criando
    var nome2 = 'Otávio'; // Redeclarando
    console.log(nome,nome2);

    if(verdadeira){
        let nome = 'Gustavo'; // Criando
        var nome2 = 'João'; // Redeclarando
        console.log(nome,nome2);
    }
}

console.log(nome,nome2);


// ESCOPO DE FUNÇÃO: a variável criada dentro da função só existe dentro da função.

// ESCOPO DE FUNÇÃO: FUNCIONA
function falaOi(){
    var nome = 'AAAAAAAAA';
    console.log(nome);
}

// ESCOPO DE FUNÇÃO: FUNCIONA
// var sobrenome = 'Miranda';
// function falaOi(){
//     
//     console.log(sobrenome);
// }


// ESCOPO DE FUNÇÃO: NÃO FUNCIONA
// // function falaOi(){
// //     var nome = 'AAAAAAAAA';
// // }
// // console.log(nome);



//ESCOPO DE BLOCO
// // function falaOi(){
// //     var sobrenome = 'Miranda';
// //     if(verdadeira){
// //         let nome = 'Luiz';
// //         console.log(sobrenome);
// //     }
// //     console.log(nome);
// // }

falaOi();




// HOSTING ACONTECE VAR - Elevar as declarações de variáveis para o topo, por isso o undefined;
// HOSTING NÃO ACONTECE COM LET
// FUNÇÕES FAZEM O HOSTING se criadas da forma padrão function funcaoteste(){}
console.log(teste);

var teste = 'Miranda';