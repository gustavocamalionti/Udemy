// new Object
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};


console.log(objA.__proto__ === Object.prototype);


// new Object
const objB = {
    chaveA: 'B'
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
console.log(objC.chaveA);
console.log(Object.getPrototypeOf(objA));

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * percentual / 100);
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual / 100);
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(25);
console.log(p1);
p1.aumento(100);
console.log(p1);

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}

//Para reaproveitar funções de objetos diferentes
console.log(Object.setPrototypeOf(p2, Produto.prototype));
p2.aumento(200);
console.log(p2);

const p3 = Object.create(Object.prototype);
console.log(p3);

const p4 = Object.create(Produto.prototype);
console.log(p4);
p4.aumento(10)
console.log(p4);
p4.preco=113;
p4.aumento(10)
console.log(p4);

const p5 = Object.create(Produto.prototype, {
    preco: {
        whitable: true,
        configurable: true,
        enumerable: true,
        value:99
    },
    tamanho: {
        whitable: true,
        configurable: true,
        enumerable: true,
        value:42
    },
});
p5.aumento(10);
console.log(p5)


