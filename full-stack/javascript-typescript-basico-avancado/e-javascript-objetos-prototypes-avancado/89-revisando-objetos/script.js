// STRING LITERAL: '' "" ``;
// ARRAY LITERAL: [];
// NUMERO LIETRAL: 1;

// nome = chave | Luiz = valor
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

//Formas de acessar os valores.
//A notação de colchetes é mais interessante em situações onde queremos tornar as chaves dinâmicas.
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
const chave1 = 'nome';
console.log(pessoa[chave1]);
const chave2 = 'sobrenome';
console.log(pessoa[chave2]);


// new Array(); [];

//construtor
const pessoa1 = new Object();
pessoa1.nome = 'Gustavo';
pessoa1.sobrenome = 'Gomes';
pessoa1.idade = '24';
// delete pessoa1.nome;

pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome.`);
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1);
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave, pessoa1[chave]);
};


// TIPOS DE FUNÇõES MOLDES
// Factory functions / Constructor functions / Classes

//FACTORY
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);

//CONSTRUCT
// {} <- this -> this
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Nenhum valor da função pode ser alterado
    // Object.freeze(this);
    // return this; // {nome: 'Luiz', ...}
}

const p2 = new Pessoa('Luiz', 'Miranda');
console.log(p2);

//SEMELHANÇA AO THIS (ATRELADA AO OBJETO ESPECIFICO)
const p3 = {};
p2.nome = 'Luiz';


//p1 = (ENDERECOMEMORIA) -> 'VALOR'
// p1.ENDERECOMEMORIA = {nome: 'Outra coisa'}
// p1 = (NOVOENDERECOMEMORIA) - NÃO PODE! OCORRERÁ ERRO PORQUE DEFINIMOS COMO CONSTANTE
const p4 = new Pessoa('Roberto1', 'Miranda');
Object.freeze(p1);
p1.nome = 'João';
// p1 = 'Outra Coisa'; // VAI DAR ERRO

const p5 = new Pessoa('Mariana1', 'Gomes');

console.log(p4);
console.log(p5);