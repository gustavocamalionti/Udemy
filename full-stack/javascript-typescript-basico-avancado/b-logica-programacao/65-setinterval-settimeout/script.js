function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function mostraData(){
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

// function funcaoDoInterval(){
//     console.log(mostraHora());
// }

// Essa função define um intervalo de tempo para que alguma função seja executada em determinado momento (infinitas vezes)
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// Essa função define um intervalo de tempo para que alguma função seja executada em determinado momento (uma vez)
setTimeout(function() {
    clearInterval(timer);
},3000);

setTimeout(function() {
    console.log('Olá, Mundo!');
},5000);

