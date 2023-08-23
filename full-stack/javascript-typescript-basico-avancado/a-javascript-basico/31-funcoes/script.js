
//Função Básica
function saudacao(nome){
    console.log(`Bom dia ${nome}!`);
    return true;
}

const nome1 = 'Gustavo';
const nome2 = 'Mariana';
const nome3 = 'Geni';

const variavel1 = saudacao(nome1); 
const variavel2 = saudacao(nome2);
const variavel3 = saudacao(nome3);

console.log(variavel1);
console.log(variavel2);
console.log(variavel3);

//Tudo que está dentro do escopo da função está protegido! Portanto, a constante resultado não é acessível em qualquer outro lugar, apenas em 'soma'.
// return encerra a execução da função
function soma(a = 1, b = 1){
    const resultado = a + b;
    return resultado;
}

const resultado = soma(2,2);
const resultado1 = soma(2,4);
const resultado2 = soma(5,10);
const resultado3 = soma(100,500);
const resultado4 = soma();

console.log(resultado);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

//Função Anonima 
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

//Arrow function (função Anônima)
const sub = (n1,n2) => {
    return n1 - n2;
}

console.log(sub(10,3));

//Arrow Function reduzido
const sub2 = (n1,n2) => n1 - n2;

console.log(sub2(15,3));