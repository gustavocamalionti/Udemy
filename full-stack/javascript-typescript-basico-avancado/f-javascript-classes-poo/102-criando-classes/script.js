class Pessoa {
    // ESSE MÉTODO PODE NÃO EXISTIR
    // É A PRIMEIRA FUNÇÃO QUE SERÁ EXECUTADA COM A CLASSE

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrneome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    comer() {
        console.log(`${this.nome} está comendo.`);
    }

    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}


//FORMA NÃO IDEAL
// function Pessoa2(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
// }

// Pessoa2.prototype.falar = function(){
//     console.log(`${this.nome} está falando.`);
// }

// Pessoa2.prototype.comer = function(){
//     console.log(`${this.nome} está comendo.`);
// }

// Pessoa2.prototype.beber = function(){
//     console.log(`${this.nome} está bebendo.`);
// }

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
const p3 = new Pessoa('João', 'Miranda');
console.log(p1.nome);
console.log(p1.falar());
console.log(p2.comer());
console.log(p3.beber());