let exemploTexto1 = "Um Texto";
let exemploTexto2 = 'Um "Texto"';
let exemploTexto3 = "Um 'Texto'";
let exemplotexto4 = "Um \"Texto\"";
let exemplotexto5 = "Um \\Texto";

console.log(exemploTexto1);
console.log(exemploTexto2);
console.log(exemploTexto3);
console.log(exemplotexto4);
console.log(exemploTexto1);

// Strings são indexidas. Ou seja, texto são iteráveis [0,1,2,3,4...]
// 0 Representa o primeiro indice da string

console.log(exemploTexto1[4]);
console.log(exemploTexto1[-1]);
console.log(exemploTexto1.charAt(6)); //ELEMENTO NA POSIÇÃO 6 
console.log(exemploTexto1.charAt(8)); //ELEMENTO NA POSIÇÃO 6 - vazio
console.log(exemploTexto1.concat(' ', 'em', ' ', 'um', ' lindo dia.')); 
console.log(exemploTexto1 + ' em um lindo dia.');
console.log(`${exemploTexto1} em um lindo dia.`); //MELHOR FORMA
console.log(exemploTexto1.indexOf('Texto')); // Encontrar o index específico do que for específicado, no caso, 'Texto'. Se não encontrar, vai retornar -1
console.log(exemploTexto1.lastIndexOf('o', 7)); //  Encontrar o index específico de trás para frente. 
console.log(exemploTexto1.lastIndexOf('o', 7)); 
console.log(exemploTexto1.length); // Tamanho

//Expressões Regulares
console.log(exemploTexto1.match(/[a-z]/g)); //Ele encontra um array de todas as letras minusculas da string
console.log(exemploTexto1.match(/[a-z]/)); // Ele encontra a primeira letra minúscula da string
console.log(exemploTexto1.search(/[a-z]/)); // Ele encontra o index do primeiro item escrito na expressão regular
console.log(exemploTexto1.search(/x/)); // Ele encontra o index do primeiro item escrito na expressão regular
console.log(exemploTexto1.replace('Um', 'Outra Coisa')); // Substitui
console.log(exemploTexto1.replace(/Um/, 'Outra Coisa')); // Substitui
console.log(exemploTexto1.replace(/t/g, '#')); // Substitui

