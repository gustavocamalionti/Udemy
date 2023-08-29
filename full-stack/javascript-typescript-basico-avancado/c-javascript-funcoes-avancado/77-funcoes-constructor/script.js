//FACTOR E CONSTRUCTOR criam novos objetos
// FUNÇÃO FÁBRICA: é uma função normal que retorna o objeto
// FUNÇÃO CONSTRUTORA: Ela faz muita coisa automaticamente, como por exemplo: criar o objeto e já retornar o objeto.
// Construtora -> Pessoa (new)
// Funções construtora por convenção começa com letra MAIUSCULA. (Pessoa)
// NEW CRIA UM NOVO OBJETO VAZIO, FAZ O THIS APONTAR PARA O OBJETO VAZIO E RETORNA IMPLICITAMENTE O OBJETO PARA A VARIAVEL, NO CASO, p1.

function Pessoa(nome, sobrenome) {
    //Atributos privados, não disponíveis fora do corpo.
    const id = 34
    const metodoInterno = function () { };

    //Atributos ou métodos públicos, disponível fora do corpo.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': Sou um método')
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');


console.log(p1.nome);
console.log(p2.nome);
p2.metodo();