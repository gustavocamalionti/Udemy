// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//FORMA DETALHADA
//-------------------------------------------------------------------------------------------------
// const numerosPares = numeros.filter(function (value, index, array) {
//     return (value % 2 === 0);
// });
// console.log(numerosPares);

// const numerosDobrados = numerosPares.map(function (value, index, array) {
//     return value * 2;
// });
// console.log(numerosDobrados);

// let valueStart = 0;
// const somaNumeros = numerosDobrados.reduce(function (count, value, index, array) {
//     return count += value;
// }, valueStart);
// console.log(somaNumeros);
//-------------------------------------------------------------------------------------------------


//FORMA USUAL
//-------------------------------------------------------------------------------------------------
// const result = numeros.filter(function (value) {
//     return (value % 2 === 0);
// }).map(function (value) {
//     return value * 2;
// }).reduce(function (count, value) {
//     return count += value;
// }, 0);
// console.log(result);
//-------------------------------------------------------------------------------------------------


//FORMA ARROW FUNCTION
//-------------------------------------------------------------------------------------------------
const result = numeros
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((count, value) => count += value, 0);
console.log(result);


