// Object.freeze(); // Trava todas as propriedades 
// Object.defineProperty() // trava apenas uma propriedades
// Object.defineProperties() // Trava várias propriedades

//defineProperty
// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     // this.estoque = estoque;

//     Object.defineProperty(this, 'estoque', {

//         enumerable:false, //Mostrar a chave
//         value:estoque,      //atribuir valor
//         writable: false,   //permitir alterar

//         configurable: true    //configurável / nem configurar e nem apagar
//     });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 500000;
// console.log(p1);
// console.log(Object.keys(p1));

// for (let chave in p1){
//     console.log(chave);
// }


//defineProperties
// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     // this.estoque = estoque;

//     Object.defineProperties(this, {
//         nome: {
//             enumerable: false, //Mostrar a chave
//             value: estoque,      //atribuir valor
//             writable: false,   //permitir alterar
//             configurable: true   //configurável / nem configurar e nem apagar},
//         },
//         preco: {
//             enumerable: true, //Mostrar a chave
//             value: estoque,      //atribuir valor
//             writable: false,   //permitir alterar
//             configurable: true   //configurável / nem configurar e nem apagar},
//         }
//     });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 500000;
// console.log(p1);
// console.log(Object.keys(p1));

// for (let chave in p1) {
//     console.log(chave);
// }