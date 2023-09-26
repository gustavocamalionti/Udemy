//----------------------------------IMPORTAR COM NOME DIFERENTE------------------------------------/
// import { nome as nome2, sobrenome, idade, soma } from './module1';

// const nome = 'João';

// console.log(nome, nome2, sobrenome, idade);
// console.log(soma(5, 5));

// import { nome, sobrenome, idade, soma } from './module1';

//----------------------------------IMPORTAR PARTES------------------------------------/
// import { nome, sobrenome, idade, soma, Pessoa } from './module1';

// console.log(nome, sobrenome, idade);
// console.log(soma(5, 5));

// const p1 = new Pessoa('Luiz', 'Otávio');
// console.log(p1);

// IMPORTAR TUDO
import * as meuModulo from './module1';
console.log(meuModulo)

//----------------------------------IMPORTAR DEFAULT------------------------------------/
import qualquerNome from './module1';
console.log(qualquerNome(5,5));

// import qualquerNome, {nome, sobrenome, idade, soma } from './module1';