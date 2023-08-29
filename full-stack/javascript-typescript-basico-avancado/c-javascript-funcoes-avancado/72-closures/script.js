//Global
function retornaFuncao(nome) {

    return function () {
     return nome;
    }
}

//funcao -> 3 escopos | DELA, PAI E GLOBAL
//Closure -> habilidade em acessar o seu escopo lexico
const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');

console.log(funcao(), funcao2());

// console.dir(funcao);

