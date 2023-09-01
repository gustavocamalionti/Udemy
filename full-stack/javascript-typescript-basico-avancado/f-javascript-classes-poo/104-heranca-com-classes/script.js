class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado){
            console.log(`${this.nome} já ligado.`)
        };

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado){
            console.log(`${this.nome} já desligado.`)
        };

        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('SmartPhone');
console.log(d1);
d1.ligar();
console.log(d1);
d1.ligar();
console.log(d1);
d1.desligar();
console.log(d1);
d1.desligar();
console.log(d1);


// A classe smartphone tem tudo de dispositivo eletronico
// Super é chamar a propriedade da classe pai
// Evite fazer uma hierarquia muito longa
// Herança vem de cima pra baixo. nas chamadas, a preferência é de baixo pra cima
class Smartphone extends DispositivoEletronico {
    constructor(nome,cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

//Polimorfismo
class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.');
    }

    falaOi(){
        console.log('Oi');
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);
s1.ligar();
s1.ligar();
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
console.log(t1.ligado);
t1.ligar();
t1.ligar();
console.log(t1);
t1.falaOi();