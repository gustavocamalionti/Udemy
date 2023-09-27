const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;

//Nome disponibiliza um objeto que podemos exportar e disponibilizar para fora do módulo.
// console.log(module);

// module.exports.nome = nome;
// console.log('------------------------------------------------------------------------');
// console.log(module);
// console.log('------------------------------------------------------------------------');
// console.log(module.exports);
// console.log('------------------------------------------------------------------------');

//ATALHOS
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCOISA  = 'O que eu quiser exportar';
// console.log(exports);