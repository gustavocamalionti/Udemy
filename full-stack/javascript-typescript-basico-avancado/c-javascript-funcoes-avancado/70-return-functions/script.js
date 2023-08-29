// return
// Retorna um valor
// Termina a função

function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a, b);
}

console.log(soma(2, 3)); //ISSO É RETORNO DA FUNÇÂO

soma2(5, 2); // ISSO NÃO É O RETORNO, É A EXECUÇÃO DA FUNÇÃO


function criaPessoa(nome, sobrenome) {
    return {
        nome: nome, sobrenome: sobrenome
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(fala, resto);


function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

function criaMultiplicador(multiplicador){
    //multiplicador
    return function(n) {
        return n * multiplicador;
    }
}

const duplica1 = criaMultiplicador(2);
const triplica1 =criaMultiplicador(3);
const quadriplica1 =criaMultiplicador(4);

console.log(duplica1(3));
console.log(triplica1(2));
console.log(quadriplica1(10));