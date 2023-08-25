//BREAK E CONTINUE FUNCIONA EM TODOS OS LAÇOS EXISTENTES

const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let numero of numeros){

    //CONTINUAR PARA A PRÓXIMA ITERAÇÃO DO LAÇO SE VERDADEIRO.
    if(numero === 4 || numero === 5) {
        console.log(`Pulei o número: ${numero}`);
        continue;
    }

    //TERMINAR A ITERAÇÃO DO LAÇO SE VERDADEIRO.
    console.log(numero);
    
    if(numero === 7) {
        console.log(`Parei no número: ${numero}`);
        break;
    }

   
}