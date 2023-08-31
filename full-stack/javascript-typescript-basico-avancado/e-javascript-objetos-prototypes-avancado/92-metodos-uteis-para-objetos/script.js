// ---------------------------------------------------------------------------------------------
// // APONTANDO PARA O MESMO ENDEREÇO (REFERENCIA).
// const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = produto;


// produto.nome = 'Luiz Otávio';
// outraCoisa.preco = 2.5;
// console.log(outraCoisa);
// console.log(produto);
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
// // APONTAR PARA ENDEREÇOS DIFERENTES (COPIAR). MELHOR FORMA
// const produto = { nome: 'Caneca', preco: 1.8 };
// const outraCoisa = { ...produto, material: 'porcelana' };

// produto.nome = 'Luiz Otávio';
// outraCoisa.preco = 2.5;
// console.log(produto);
// console.log(outraCoisa);
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
// // APONTAR PARA ENDEREÇOS DIFERENTES (COPIAR). POSSIBILIDADE NÃO USUAL
// const produto = { nome: 'Caneca', preco: 1.8 };
// const caneca = Object.assign({}, produto, { material: 'porcelana' });

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
// // APONTAR PARA ENDEREÇOS DIFERENTES (COPIAR). PIOR FORMA POSSÍVEL
// const produto = { nome: 'Caneca', preco: 1.8 };
// const caneca = {nome: produto.nome, preco:produto.preco, material: 'Porcelana'}

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
// // MOSTRAR AS CHAVES DO OBJETO
// const produto = { nome: 'Caneca', preco: 1.8 };
// const caneca = Object.assign({}, produto, { material: 'porcelana' });

// console.log(Object.keys(produto));
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
// // Object.freeze, Object.defineProperties, Object.defineProperty
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
// // Object.getOwnProperty TRÁS TODAS AS INFORMAÇÕES DO ATRIBUTO
const produto = { nome: 'Caneca', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable:false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outra coisa';
console.log(produto);
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
// // Object.values - RECUPERA TODOS OS VALORES
// const produto = { nome: 'Caneca', preco: 1.8 };

// console.log(Object.values(produto));
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
// // Object.entries - RECUPERA TODO O ARRAY
// const produto = { nome: 'Caneca', preco: 1.8 };

// console.log(Object.entries(produto));

for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}
// ---------------------------------------------------------------------------------------------
