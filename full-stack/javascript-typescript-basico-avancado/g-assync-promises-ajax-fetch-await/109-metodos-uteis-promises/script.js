function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('ERRO'));;
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Promise.all 
// Promise.race
// Promise.resolve
// Promise.reject

const promises = [
    // 'Primeiro Valor',
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5)),
    esperaAi(1000,rand(1,5)),
    // 'Outro Valor'
];

// ALL - TODOS
// TODAS SÃO EXECUTADAS
// SE ENCONTRAR UM ERRO, ELA SÓ EXECUTARÁ O ERRO E REJEITARÁ TODAS.
Promise.all(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (error) {
        console.log(error);
    });

// RACE - CORRIDA
// TODAS SÃO EXECUTADAS E A PRIMEIRA QUE CONCLUIR SERÁ RETORNADA. 
// SE A PRIMEIRA QUE RESOLVER REJEITAR, ELA TAMBÉM TE ENTREGARÁ O ERRO
Promise.race(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (valor) {
        console.log(valor)
    });

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => console.log(e));