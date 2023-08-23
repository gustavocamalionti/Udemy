// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// A função Date é uma função construtora, logo, precisa utilizar new;
// Funções construtora sempre começa com a primeira letra Maiúscula.

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data_0 = new Date(0 + tresHoras + umDia); // 01/01/1970(MARCO ZERO) Timestamp unix ou época unix (somar mais 3 horas por conta do GMT -0300)
console.log(data_0.toString());

// Date(ano,mes,dia,hora,minuto,segundo,milesimoS)
const date1 = new Date(2019, 3, 20, 15, 14, 27,500);
const date2 = new Date(2019, 3, 20);
const date3 = new Date(2019, 3);

const date4 = new Date('2019-04-20 20:20:59');
const date5 = new Date('2019-04-20T20:20:59.100'); //.100 = milesimoS

console.log(date1.toString());
console.log(date2.toString());
console.log(date3.toString());
console.log(date4.toString());
console.log(date5.toString());


console.log('Dia: ', date5.getDate());
console.log('Mês: ', date5.getMonth() + 1); // O mês começa do zero, por isso +1.
console.log('Ano: ', date5.getFullYear());
console.log('Hora: ', date5.getHours());
console.log('Minuto: ', date5.getMinutes());
console.log('Segundo: ', date5.getSeconds());
console.log('Milésimo de Segundos: ', date5.getMilliseconds());
console.log('Dia da Semana: ', date5.getDay()); // 0 - Domingo, 6 - Sábado
console.log(Date.now()); // Do marco zero até o dia atual;

const date6 = new Date(Date.now());
console.log(date6);

function zeroToLeft(num){
    return num >= 10 ? num: `0${num}`;
}

function formatDate(date){
    const dia = zeroToLeft(date.getDate());
    const mes = zeroToLeft(date.getMonth() + 1);
    const ano = zeroToLeft(date.getFullYear());
    const hora = zeroToLeft(date.getHours());
    const min = zeroToLeft(date.getMinutes());
    const seg = zeroToLeft(date.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const date7 = new Date();
const dataBrasil = formatDate(date7);
console.log(dataBrasil);