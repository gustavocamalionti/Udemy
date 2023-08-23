const pessoa = {
    // nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

console.log(pessoa);

// ATRIBUILÃO NORMAL
// console.log(pessoa.nome);
// const nome = pessoa.nome;
// console.log(nome);

//ATRIBUIÇÃO POR DESESTRUTURAÇÃO
const { nome = 'Não existe', sobrenome, idade } = pessoa;
console.log(nome, sobrenome);

// Por algum motivo, precisa alterar o nome padrão do atributo do objeto
// const { nome: n = 'Não existe', sobrenome, idade } = pessoa;


const { endereco } = pessoa;
console.log(endereco);

const {endereco: { rua, numero }} = pessoa;
console.log(rua, numero);

// também é possível extrair as três variáveis de uma vez só
// const {endereco: { rua, numero }, endereco} = pessoa;

// também é possível atribuir valor default
// const {endereco: {rua: r = 12345, numero }, endereco } = pessoa;

// Usar o padrão rest para pegar o resto das propriedades

// const {nome, ...resto} = pessoa;
// console.log(nome,resto);
