/**
 * && -> false && true -> false; Não preciso checar nada se uma das expressões resulta em false. Logo, retorna false na primeira situação
 * || -> true && false -> true; Vai retornar 'o valor verdadeiro'; Todas as expressões precisam ser falsas para que o or retorne false
 */


// -----------------------------------------------------------------------------------------------------------------------
// PARA AND
// -----------------------------------------------------------------------------------------------------------------------

//No momento que o javascript encontrar uma função que invalida a expressão and, ele retorna o valor dela imediatamente. 
//Se não encontrar nenhum valor false, ele retorna o valor da ultima função. No caso abaixo: Maria
console.log('Luiz Otávio' && '0' && 'Maria');

//Valores que invalidam (valores FALSY). Ou seja, qualquer outra coisa diferente disso avalia a expressão como true.
// - false
// - 0
// ''
// ""
// ``
// null
// undefined
// NaN 

function falaOi() {
    return 'Oi';
}

const vaiExecutar = '1';

console.log(vaiExecutar && falaOi());


// -----------------------------------------------------------------------------------------------------------------------
// PARA OR
// -----------------------------------------------------------------------------------------------------------------------

console.log(0 || false || null || 'Luiz Otávio' || true);

let corUsuario = null;
let corPadrao = corUsuario || 'black';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

//PEGADINHA! c = string com o valor 'false', cuidado! é uma situação verdadeira.
console.log(a || b || c || d || e);