// const nomes = ['Eduardo', 'Maria', 'Joana']; // RECOMENDADO
const nomes = new Array('Eduardo', 'Maria', 'Joana'); // ANTIGO

// Funciona para String, Objetos, Funções, Números
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);


// Arrays são valores por referência
// Tudo que eu fizer em nome, reflete em novo e tudo que eu fizer em novo reflete em nome
const novo = nomes;
novo.pop();
console.log(nomes);


const novo2 = [...nomes]; // copiar - spread
const removido = novo2.pop(); // remove ultimo
console.log(removido);
console.log(nomes, novo2);
console.log(nomes.length);

console.log(nomes);
const removido2 = nomes.shift(); // remove primeiro
console.log(removido2);
console.log(nomes);

nomes.push('João'); // Adicionar no final
nomes.push('Wallace'); // Adicionar no final
nomes.unshift('Wallace Final'); // Adicionar no Inicio
console.log(nomes);

const novo3 = nomes.slice(1, 3); // Todos de 1 a 2 (indice)
console.log(novo3);

const novo4 = nomes.slice(1,-2); // todos do indice 1 até total -2
console.log(novo4);

//Função para string (split)
const nome5 = 'Luiz Otávio Miranda';
const nomess = nome5.split(' ');
console.log(nomess);

const nomeUnido = nomess.join(' ');
console.log(nomeUnido);