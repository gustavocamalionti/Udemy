// SPLICE faz a mesma coisa que pop, push,unshift,shift e mais um pouco! ela é um pouco maior
// -5     -4        -3         -2         -1
// 0       1         2          3         4
let nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Primeiro elemento: Indice onde começar a mexer
// Segundo elemento: quantos elementos gostaria de remover do array
// nomes.splice(indice, delete, elem1, elem2, elem3);

// POP
console.log('----------------------------- POP -------------------------------')
console.log('Arrayu Original:', nomes);
let removidos = nomes.splice(4, 1);
console.log(nomes);
console.log('removidos: ' + removidos);

console.log('Arrayu Original:', nomes);
removidos = nomes.splice(-1, 1);
console.log(nomes);
console.log('removidos: ' + removidos);
console.log('------------------------------------------------------------')

//COMEÇAR DO -2 e remover até o infinito
// nomes.splice(-2, Number.MAX_VALUE);

// Push
console.log('----------------------------- push -------------------------------')
console.log('Arrayu Original:', nomes);

removidos = nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes);
console.log('removidos: ' + removidos);
console.log('------------------------------------------------------------')


// SHIFT
console.log('----------------------------- shift -------------------------------')
console.log('Arrayu Original:', nomes);

removidos = nomes.splice(0, 1);
console.log(nomes);
console.log('removidos: ' + removidos);
console.log('------------------------------------------------------------')

// SHIFT
console.log('----------------------------- unshift -------------------------------')
console.log('Arrayu Original:', nomes);

removidos = nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes);
console.log('removidos: ' + removidos);
console.log('------------------------------------------------------------')

// ADICIONAR UM ITEM ESPECIFICO NO INDICE ESPECIFICO
console.log('----------------------------- ADICIONAR UM ITEM ESPECIFICO -------------------------------')
console.log('Arrayu Original:', nomes);

removidos = nomes.splice(1, 0, 'Roberto');
console.log(nomes);

// remover o item do indice 1 e adicionar gustavo no indice 1
// nomes.splice(indice,delete,element1,element2,element3)
removidos = nomes.splice(1, 1, 'Gustavo');
console.log(nomes);
console.log('removidos: ' + removidos);
console.log('------------------------------------------------------------')