let exemploTexto1 = "Um Texto Longo";
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
console.log(exemploTexto1.slice(3,8)) // Cortar um trecho específico (start, end)
console.log(exemploTexto1.slice(-3)); // o tamanho total da string menos a quantidade especificada. no caso, cortar apenas a quantidade especificada da string
console.log(exemploTexto1.slice(-5,-1)); // xto
console.log(exemploTexto1.substring(exemploTexto1.length-5, exemploTexto1.length -1)); // Análogo em cima
console.log(exemploTexto1.substring(exemploTexto1.length-5)); // do indice até o final
console.log(exemploTexto1.split(' ')) // Dividir a string gerando um array com um caracter especificado. No caso, o caracter é o espaço
console.log(exemploTexto1.split(' ',2 )) // Mesmo caso acima, porém que aconteça apenas uma vez
console.log(exemploTexto1.toUpperCase()); // Maiuscula
console.log(exemploTexto1.toLowerCase()); // Minúscula

//Expressões Regulares
console.log(exemploTexto1.match(/[a-z]/g)); //Ele encontra um array de todas as letras minusculas da string
console.log(exemploTexto1.match(/[a-z]/)); // Ele encontra a primeira letra minúscula da string
console.log(exemploTexto1.search(/[a-z]/)); // Ele encontra o index do primeiro item escrito na expressão regular
console.log(exemploTexto1.search(/x/)); // Ele encontra o index do primeiro item escrito na expressão regular
console.log(exemploTexto1.replace('Um', 'Outra Coisa')); // Substitui
console.log(exemploTexto1.replace(/Um/, 'Outra Coisa')); // Substitui
console.log(exemploTexto1.replace(/t/g, '#')); // Substitui