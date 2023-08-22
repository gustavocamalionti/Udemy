
// TERRIVEL!!! Deve haver uma forma de agrupa-las... que tal um objeto do tipo pessoa?
const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55;

// Objeto com um caso de uso e com funções
const pessoaExemplo = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
     console.log(`Olá, mundo! quem está falando é o ${this.nome}.`);
     console.log(`Tenho ${this.idade} anos.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

console.log(pessoaExemplo.nome);
console.log(pessoaExemplo.sobrenome);
console.log(pessoaExemplo.idade);
pessoaExemplo.fala();
pessoaExemplo.incrementaIdade();
pessoaExemplo.fala();
pessoaExemplo.incrementaIdade();
pessoaExemplo.fala();
pessoaExemplo.incrementaIdade();
pessoaExemplo.fala();
pessoaExemplo.incrementaIdade();
pessoaExemplo.fala();
//Quando envia um valor para o parâmetro, chamamos ele de argumento. No caso, Luiz, Otávio e 25 são argumentos da função.
const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 70);
const pessoa5 = criaPessoa('Jean', 'Otávio', 51);
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);

//Função que cria esses objetos com parametros. Necessário atribuir nome nome, sobrenome sobrneome e idade iadade
function criaPessoaPadrao(nome,sobrenome,idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

//Função que cria esses objetos com parametros. Forma mais prática quando o nome do parâmetro é igual ao nome do atributo
function criaPessoa(nome,sobrenome,idade){
    return {
        nome,
        sobrenome,
        idade
    }
}
