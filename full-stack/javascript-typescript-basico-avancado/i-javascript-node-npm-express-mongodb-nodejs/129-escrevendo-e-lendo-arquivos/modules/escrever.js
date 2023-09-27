const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' });
}


// fs.writeFile(caminhoArquivo, 'Frase 1 \n', {
//     // flag: 'w', // Essa flag apaga todo o conteúdo desse arquivo caso ele exista e escreva de novo
//     flag: 'a', // Append de conteúdo
//     encoding: 'utf8'
// });