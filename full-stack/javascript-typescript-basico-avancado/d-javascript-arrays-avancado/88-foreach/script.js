const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let valor of a1) {
    console.log(valor);
}

//For each tem a mesma estrutura do filter,map, reduce
a1.forEach(function (valor, indice, array) {
    console.log(`Valor: ${valor} Indice: ${indice} Array: ${array}`);
})
