const pessoas = [
    { id:3, nome: 'Luiz'},
    { id:2, nome: 'Maria'},
    { id:1, nome: 'Helena'},
];

//RESOLUÇÃO 1 - A ORDEM FOI ALTERADA. A IDEIA INICIAL É CRIAR UM ARRAY NUMERADO na mesma ordem
// const novasPessoas = {};

// for(const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

//RESOLUÇÃO 2
const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas);