
function relogio() {
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    //forma mais performática e reduzida em situações com diversos objetos com evento de click
    document.addEventListener('click', function (event) {
        const element = event.target;

        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        };

        if (element.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        };

        if (element.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        };

    })

    // iniciar.addEventListener('click', function (event) {
    //     relogio.classList.remove('pausado');
    //     clearInterval(timer);
    //     iniciaRelogio();

    // })

    // pausar.addEventListener('click', function (event) {
    //     clearInterval(timer);
    //     relogio.classList.add('pausado');
    // });

    // zerar.addEventListener('click', function (event) {
    //     clearInterval(timer);
    //     relogio.innerHTML = '00:00:00';
    //     segundos = 0;
    // });


}


relogio();