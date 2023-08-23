

//A lógica para não precisar usar switch case, seria coincidir o indice do array com o item a ser pesquisado.
function getDiaSemanaTexto(diaSemana) {
    const diasSemanaTexto = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return diasSemanaTexto[diaSemana];
}

function getMesTexto(mes) {
    const MesesTexto = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return MesesTexto[mes];
}

function zeroToLeft(num){
    return num >= 10 ? num: `0${num}`;
}

function createTextDate(date){
    const diaSemana = date.getDay();
    const mes = date.getMonth();
    const ano = zeroToLeft(date.getFullYear());
    const horas = zeroToLeft(date.getHours());
    const minutos = zeroToLeft(date.getMinutes());

    const textoDiaSemana = getDiaSemanaTexto(diaSemana);
    const textoMes = getMesTexto(mes);

    return  `<p><strong>${textoDiaSemana}, ${diaSemana} de ${textoMes} de ${ano} <br> ${horas}:${minutos}</strong></p>`;
}

function createTextDateDefault(date){
    // const options = {
    //     dateStyle:'full'
    // };

    const options = {
        year: 'numeric',
        month: ('long' || 'short' || 'numeric'),
        weekday: ('long' || 'short'),
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };

    return date.toLocaleDateString('pt-BR', options);
}

function exec(){
    const content = document.querySelector(".container");
    const date = new Date();

    // content.innerHTML = createTextDate(date);

    content.innerHTML = createTextDateDefault(date);
}


exec();