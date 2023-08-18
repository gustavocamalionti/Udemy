// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com número
// Não podem conter espaços ou traços
// Utilizamos camelCase para constantes
// Constantes Case-sensitive (letras maiusculas ou minusculas fazem diferença)
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultado + 5;


console.log(resultado, resultadoDuplicado, resultadoTriplicado);
console.log(typeof(nome));
console.log(typeof segundoNumero);