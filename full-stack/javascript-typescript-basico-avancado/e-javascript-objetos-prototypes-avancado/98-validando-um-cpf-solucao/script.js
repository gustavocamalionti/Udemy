// 705.484.450-52 

/*


//PRIMEIRO PASSO, MULTIPLICAR OS 9 PRIMEIRO DIGITOS PELA SEQUENCIA NUMERICA (10,9,8,7,6,...)

7 x 10 = 70
0 x 9 = 0
5 x 8 = 40
4 x 7 = 28
8 x 6 = 48
4 x 5 = 20
4 x 4 = 16 
5 x 3 = 15
0 x 2 = 0

total1 = 237

11 - (total1 % 11) = 5 (PRIMEIRO DIGITO);

CONDIÇÃO: Se o resultado de 11 - (total1 % 11) for > 9, então ele assume valor 0

//SEGUNDO PASSO, MULTIPLICAR OS 10 PRIMEIRO DIGITOS PELA SEQUENCIA NUMERICA (11,9,8,7,6,...)
7 x 11 = 77
0 x 10 = 0
5 x 9 = 45
4 x 8 = 32
8 x 7 = 56
4 x 6 = 24
4 x 5 = 20 
5 x 4 = 20
0 x 3 = 0
5 X 2 = 10

total2 = 284

11 - (total2 % 11) = 2 (SEGUNDO DÍGITO)

CONDIÇÃO: Se o resultado de 11 - (total1 % 11) for > 9, então ele assume valor 0

TERCEIRO PASSO: Comparar o CPF GERADO COM O CPF INFORMADO(COM OS NOVOS DIGITOS), SE BATER ENTÃO ELE É VÁLIDO.
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2); // 9 primeiros dígitos
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCPF = cpfParcial + digito1 + digito2;
    return novoCPF === this.cpfLimpo;

};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1; // A primeira rodada inicia com 10 e a segunda inicia com 11.
    let total = cpfArray.reduce(function (ac, val) {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito;
}

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());

if(cpf.valida()) {
    console.log('CPF Válido!');
} else {
    console.log('CPF inválido!');
}