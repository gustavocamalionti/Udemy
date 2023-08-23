// // PÉSSIMO!
// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

//(variável inicial; condição para parar; incrementar ou decrementar)
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

console.log('------------------------------------------------')

for (let i = 500; i <= 400; i -= 10) {
    console.log(`Linha ${i}`);
}

console.log('------------------------------------------------')

for (let i = 100; i <= 400; i += 10) {
    console.log(`Linha ${i}`);
}

console.log('------------------------------------------------')

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'Ímpar';
    console.log(i, par);
}

console.log('------------------------------------------------')

const frutas = ['Maça', 'Pera', 'Uva', 'Banana', 'Abacaxi', 'Goiaba'];
for (let i = 0; i <= frutas.length - 1; i++) {
    console.log(`Índice ${i}: ${frutas[i]}`);
}