export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 30;
const cpf = '3014913049';

export default function soma(x,y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export { nome, sobrenome, idade, soma };
// export { nome as nome2, sobrenome, idade, soma };
// export { nome as default, sobrenome, idade, soma };