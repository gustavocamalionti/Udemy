// (condicao) ? 'Valor para Verdadeiro' : 'Valor para Falso';

// Ternária 
const pontuationUser = 1019;
const nivelUser = pontuationUser >= 1000 ? 'Usuário VIP' : 'Usuário NORMAL';
console.log(nivelUser);

// if (pontuationUser >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário NORMAL');
// }

//Setando um valor padrão (fallback)
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);

