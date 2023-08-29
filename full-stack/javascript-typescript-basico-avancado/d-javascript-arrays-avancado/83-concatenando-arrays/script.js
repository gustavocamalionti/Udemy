//Filter, map, reduce (Funções mais importantes do JAVASCRIPT)
//Filter passa no seu argumento uma função de callback

//Retorne os números maiores que 10 em um novo array
//               0, 1, 2,3,4 ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 55, 22, 27];

//FORMA LONGA E NÃO USUAL
//valor,indice,array não precisaria declarar ,porque automaticamente ele é retornado.
function callbackFilter(valor, indice, array) {
    // JEITO CORRETO
    return valor > 10;

    // JEITO BURRO
    // if (valor > 10) {
    //     return true;
    // } else {
    //     return false;
    // }
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

//FORMAS MAIS COMUNS
const numerosFiltrados2 = numeros.filter(function(valor) {
    return valor > 10;
})

console.log(numerosFiltrados2);

const numerosFiltrados3 = numeros.filter((valor) => {
    return valor > 10;
})

console.log(numerosFiltrados3);