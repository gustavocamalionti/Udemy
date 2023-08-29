// O Javascript não se importa se existe a declaração de parametros ou não.
// A função definida com a palavra function possui argumentos que sustenta todos os argumentos enviados
function funcao() {
    console.log('Oie');
    console.log(arguments);
    console.log(arguments[0]); // Valor
    console.log(arguments[1]); // 1
    console.log(arguments[10]); // 10
    console.log(arguments[11]); // 11
}

funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Luiz');

function funcao2(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}

funcao2(1, 2, 3, 4, 5, 6, 7);

function funcao3(a, b, c, d, e, f) {
    b = b || 0;
    console.log(a, b, c, d, e, f);
}

funcao3(1, 2, 3);

//valores default
function funcao4(a, b = 2, c = 4) {
    console.log(a + b + c);
}

funcao4(2, 10);
funcao4(2, undefined, 10); // Assume o valor padrão
funcao4(2, null, 10); // Não assume o valor padrão

function funcao5({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

funcao5({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20 });

function funcao6([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao6(['Luiz Otávio', 'Miranda', 30]);

// function conta(operador,acumulador,numeros){

// };
// conta('+', 0, [20,30,40,50]);

//rest operator
function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        if(operador === "+") acumulador += numero;
        if(operador === "-") acumulador -= numero;
        if(operador === "/") acumulador /= numero;
        if(operador === "*") acumulador *= numero;
    }

    console.log(acumulador);
}

conta ('+', 0, 20,30,40,50)

const conta2 = function (operador, acumulador, ...numeros) {
    console.log(arguments);
};

conta2('+', 1,20,30,40,50);

const teste = (...args) => {
    console.log(args);
}
teste('+', 1,20,30,40,50);

//não existe arguments em arrow functions 
const conta3 = (operador, acumulador, ...numeros) => {
    console.log(arguments);
};

conta3('+', 1,20,30,40,50);

