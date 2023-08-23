

function getDiaSemanaTexto(diaSemana) {
    const diasSemanaTexto = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    switch (diaSemana) {
        case 0:
            return diasSemanaTexto[0];
            break;
        case 1:
            return diasSemanaTexto[1];
            break;
        case 2:
            return diasSemanaTexto[2];
            break;
        case 3:
            return diasSemanaTexto[3];
            break;
        case 4:
            return diasSemanaTexto[4];
            break;
        case 5:
            return diasSemanaTexto[5];
            break;
        case 6:
            return diasSemanaTexto[6];
            break;

        default:
            return '';
            break;
    }
}

function exec(){
    const date = new Date('1987-04-20 00:00:00');
    const diaSemana = date.getDay();
    
    console.log(getDiaSemanaTexto(diaSemana));
}

exec();