/**
 * Entre 0 - 12 | Bom dia!
 * Entre 12 - 18 | Boa tarde!
 * Entre 18 - 23 | Boa noite!
 */

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 50;

if (hora < 12) {
    console.log('Bom dia!');
} else if(hora>=12 && hora<18){
    console.log('Boa tarde!');
} else if (hora>=18 && hora<23) {
    console.log('Boa noite!')
} else {
    console.log ('Olá');
}

const numero = 3;

if (numero >= 0 && numero <=5 ){
console.log('O numero está entre 0 e 5');
} else {
    console.log('O numero está fora do intervalo');

}
