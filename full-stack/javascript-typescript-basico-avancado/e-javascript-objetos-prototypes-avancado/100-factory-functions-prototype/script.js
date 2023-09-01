
// Esse desacoplamento é chamada de composição ou mixing

const falar = {
    falar() {
        console.log(`${this.nome} está falando. `);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo. `);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo. `);
    }
};

const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Gustavo', 'Rodrigues');
const p3 = criaPessoa('Rogério', 'Soares');
console.log(p1.falar());
console.log(p2.comer());
console.log(p3.beber());