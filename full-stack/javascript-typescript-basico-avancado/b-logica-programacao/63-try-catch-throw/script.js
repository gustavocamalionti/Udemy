
//ELE TENTA EXECUTAR! SE OCORRER ERRO CAIRÁ NO BLOCO CATCH
try {
    console.log(naoExisto);
} catch (err) {
    console.log('naoExisto não existe.');

    //NÃO EXIBA O ERRO PARA O USUÁRIO!!!
    console.log(err);
}

//TAMBÉM É POSSÍVEL FORÇAR UM ERRO ESPECIFICO COM THOW
//É COMUM TRATAR O PRÓPRIO ERRO
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {

        //ERRO REAL DO JAVASCRIPT
        throw new Error('x e y precisam ser números.');

        //OUTRAS FORMAS DE ERRO DO JAVASCRIPT
        throw new TypeError('x e y precisam ser números.');
        // throw new ReferenceError('x e y precisam ser números.');

        //APENAS TEXTO
        // throw ('x e y precisam ser números.');
    }

    return x + y;
}

console.log('-------------------------------------------------');
console.log('-------------------------------------------------');

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (erro) {

    console.log('Alguma coisa mais amigável para o usuário');
    //NÃO EXIBA O ERRO PARA O USUÁRIO!!!
    // console.log(error);
}