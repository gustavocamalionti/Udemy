
//FUNÇÃO CONSTRUTORA
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem de Erro');
            }
            estoquePrivado = valor;
            return;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);
p1.estoque = 'O valor que eu quero!';


//FUNÇÃO FACTORY
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}

const prod1 = criaProduto('Camiseta');
prod1.nome = 'Qualquer Coisa';
console.log(prod1.nome);