
// simbol pode ser utilizado para criar uma chave privada dentro do objeto
// Cada vez que chamar o Symbol, ele vai ter um id aleatório. Ou seja, um symbol nunca será igual a outro.
// Symbol() === Symbol()
// A vantagem de utilizar ele dessa forma é que é praticamnete impossível acessa-lo e alterar fora da minha classe. Evitando que façam alterações diretas sem tratamento no setter.
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome, limiteVelocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
        this.limiteVelocidade = limiteVelocidade;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    set velocidade(valor) {
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar() {
        if (this[_velocidade] >= this.limiteVelocidade) return;
        this[_velocidade]++;
    }

    desacelerar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca', 95);

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}

// n faz sentido o fusca tiver velocidade 1500, com isso temos que trabalhar esse set. GETTERS E SETTERS com symbol
c1.velocidade = 1500;

console.log(c1);