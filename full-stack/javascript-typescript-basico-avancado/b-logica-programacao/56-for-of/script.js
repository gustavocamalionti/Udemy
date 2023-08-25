// For Clássico - Geralmente com iteráveis (Array ou Strings);
// For IN - Retorna o índice ou chave (string, array ou objetos);
// For OF - Retorna o valor em si (iteráveis, arrays ou strings)





//            01234....
const nome = 'Luiz Otávio';

//Clássico
for (let i = 0; i < nome.length; i++) {
   console.log(nome[i]);
}

console.log('--------------------------------------------------')

//FOR IN
for (let i in nome) {
    console.log(nome[i]);
}

console.log('--------------------------------------------------')

//FOR OF apenas para array ou strings, objetos não funciona!
for (let valor of nome){
    console.log(valor);
}

console.log('--------------------------------------------------')

const nome2 = ['Luiz', 'Gustavo', 'Henrique'];

for(let valor of nome2){
    console.log(valor);
}

console.log('--------------------------------------------------')

//FOR EACH
nome2.forEach(function (elemento, indice, array) {
    console.log(elemento,indice, array);
})