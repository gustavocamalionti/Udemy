// Produto -> aumento, desconto
// Vendo Camisetas = Cor, Canecas = material

function Produto(nome, preco){
this.nome = nome;
this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco += quantia;
}

function Camiseta(nome, preco,cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
//Camiseta.prototype.constructor = camiseta;
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

//Sobrescrevendo o método pai - Na real, ele só prioriza utilizar o método mais específico.
Camiseta.prototype.aumento = function(quantia) {
    this.preco = this.preco + (this.preco * (quantia/100));
}

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10);

console.log(produto);
console.log(camiseta);


function Caneca(nome,preco,material, estoque) {
    Produto.call(this,nome,preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable:false,
        get: function() {
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
console.log(caneca);
console.log(camiseta);
console.log(produto);

caneca.estoque = '100';
console.log(caneca);
console.log(caneca.estoque);
caneca.estoque = 100;
console.log(caneca);
console.log(caneca.estoque);