//array - vetor de uma única dimensão
const frutas = ['Pera', 'Maça', 'Uva', 'Abacaxi'];

//FOR CLÁSSICO
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log('------------------------ Array --------------------------')

//FOR IN
for (let indice in frutas) {
    console.log(frutas[indice]);
}

console.log('----------------------- Objetos ---------------------------')

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// Acessar o valor
console.log(pessoa.nome); 

// Acessar o valor de uma forma mais dinâmica, principalmente quando não sabemos qual é o nome da propriedade que queremos pegar.
console.log(pessoa['nome']); 
const chave = 'idade';
console.log(pessoa[chave]);

for(let chave in pessoa){
    console.log(pessoa[chave]);
}

