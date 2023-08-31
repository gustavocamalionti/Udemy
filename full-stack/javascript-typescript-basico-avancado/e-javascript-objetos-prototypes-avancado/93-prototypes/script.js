// Prototypes é a base de javascript para trabalhar com orientação a objetos.

//REVISÃO

//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// Instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora

console.log(pessoa1);
console.log(pessoa2);

// PARA EVITAR DUPLICAÇÃO DE FUNÇÕES IGUAIS ENTRE INSTÂNCIAS, PODEMOS CORRIGIR USANDO PROTOTYPES.
/**
 * Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.
 * 
 * --------------- Definição de protótipo ----------------
 *  Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.
 * 
 * Todos os objetos tem uma referência interna para um protótipo (__proto__) 
 * que vem da propriedade prototype da função construtora que foi usada para 
 * criá-lo. Quando tentamos acessar um membro de um objeto, primeir oo motor
 * do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia 
 * de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
 */

function PessoaComPrototype(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}


//Usar prototype corrige o problema de duplicidade de funções nas instâncias
PessoaComPrototype.prototype.estouAqui = 'Hahahaha';

PessoaComPrototype.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

// Instância
const pessoa3 = new PessoaComPrototype('Luiz', 'O.'); // <- Pessoa = Função construtora


const data = new Date();

console.log(pessoa1);
console.log(data);
console.log(pessoa3.estouAqui);

//O PRIMEIRO LOCAL QUE O MOTOR DO JAVASCRIPT VAI PROCURAR SERÁ DENTRO DO OBJETO.
//SE retirar this.nomeCompleto = () => 'ORIGINAL... , irá usar a referência do PROTO. MELHORANDO DRASTICAMENTE A PERFORMANCE DA APLICAÇÃO.
// 1° pessoa --> 2° pessoa.prototype --> 3° Object.prototype
console.log(pessoa3.nomeCompleto());

