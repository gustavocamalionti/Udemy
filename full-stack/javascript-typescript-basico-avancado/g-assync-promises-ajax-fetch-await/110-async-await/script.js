function rand(min = 0, max = 3) {
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

//EXECUTAR DE FORMA SEQUÊNCIAL.

// esperaAi('Fase 1', rand(0, 3))
//     .then((valor) => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     }).then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//     }).catch(e => console.log(e));

async function executa() {
    try {
        const fase1 = esperaAi('Fase 1', rand());
        console.log(fase1);

        setTimeout(() => {
            console.log('essa promise estava pendente');
        }, 1100);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi(2, rand());
        console.log(fase3);

        console.log('Terminamos na fase: ' + fase3)
    } catch (e) {
        console.log(e);
    }

}


//Promotions possuem status:
//   - pending | Quando a promose não foi resolvida ainda e está em execução
//   - fullfilled | Representação de sucesso (resolvida);
//   - rejected | Representação de falha (Rejeição);
executa();
