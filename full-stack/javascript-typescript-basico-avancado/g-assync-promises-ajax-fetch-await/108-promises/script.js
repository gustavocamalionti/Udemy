function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

//ALEATORIO - OU SEJA, A ORDEM DE EXECUÇÃO NÃO IMPORTA
// function esperaAi(msg,tempo) {
//     setTimeout(() => {
//         console.log(msg);
//     }, tempo);
// }

// esperaAi('Frase 1', rand(1,3));
// esperaAi('Frase 2', rand(1,3));
// esperaAi('Frase 3', rand(1,3));

//EM ORDEM, JEITO NÃO USUAL E PÉSSIMO
// function esperaAi(msg, tempo, functionCallback) {
//     setTimeout(() => {
//         console.log(msg);
//         if(functionCallback) functionCallback();
//     }, tempo);
// }

// esperaAi('Frase 1', rand(1, 3), function () {
//     esperaAi('Frase 2', rand(1, 3), function () {
//         esperaAi('Frase 3', rand(1, 3));
//     })
// });

//PROMISES, JEITO USUAL
//resolve => executado com sucesso, então faça isso,
//reject => executado com falha, então rejeita pra mim 
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('ERRO'));
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}


esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1, 3))

    }).then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Eu serei o último a ser exibido.')
    })
    .catch(e => {
        console.log('Ocorreu um problema: ', e)
    });


esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(222, rand(1, 3))

    }).then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela')
    })
    .catch(e => {
        console.log('ERRO: ', e)
    });

console.log('Isso aqui será exibido antes de qualquer promisse');