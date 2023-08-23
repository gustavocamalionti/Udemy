
//Indice         0, 1, 2, 3, 4, 5, 6, 7, 8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

//RESOLUÇÃO DEMORADA E ANTIGA!
// const primeiroNumero = numeros[0];
// const segundoNumero = numeros[1];
// const terceiroNumero = numeros[2];
// const quartoNumero = numeros[3];
// const quintoNumero = numeros[4];
// const sextoNumero = numeros[5];
// const setimoNumero = numeros[6];
// const oitavoNumero = numeros[7];
// const nonoNumero = numeros[8];
// const decimoNumero = numeros[69];

//RESOLUÇÃO POR DESESTRUTURAÇÂO
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero);
console.log(segundoNumero);

// .. rest, ... spread
const [terceiroNumero, quartoNumero, ...resto] = numeros;
console.log(terceiroNumero);
console.log(quartoNumero);
console.log(resto);

//pegar itens específicos
const [, dois, , quatro, , , sete] = numeros;
console.log(dois, quatro, sete);

// numeros2[0] = [1,2,3];
// numeros2[1] = [4,5,6];
// numeros2[2] = [7,8,9];
// numeros[1][2] = 6;

const numeros2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

//POSSIBILIDADE DE USO! PORÉM DEIXA TUDO COMPLEXO
const [ , [ , , seis]] = numeros2;
console.log(seis);

//MELHOR POSSIBILIDADE
const [lista1,lista2,lista3] = numeros2;
console.log(lista3);
