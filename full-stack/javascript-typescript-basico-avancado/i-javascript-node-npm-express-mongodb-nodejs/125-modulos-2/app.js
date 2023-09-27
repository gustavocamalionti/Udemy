
// colocar ./ significa acessar os arquivos do diretório atual ou pra frente
// Colocar .../.../.../ significa acessar os arquivos de um/dois/três diretórios interiores
const multiplicacao = require('./mod');


console.log(multiplicacao(2,2));

console.log(__dirname);
console.log(__filename);


// Forma para pegar o caminho correto independente do sistema operacional. Automaticamente o comando entende se deve usar barra normal on invertida.
const path = require('path');

console.log('---------------------------------------------');
console.log(path.resolve(__dirname, '..', '..'));
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));