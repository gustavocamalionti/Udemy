//FACTORY FUNCTION (FUNÇÃO FÁBRICA)
//CONSTRUCTOR FUNCTION (FUNÇÃO CONSTRUTORA)
// Uma função dentro de um objeto chamamos de MÉTODO


//FORMA MAIS CORRETA E PERFORMÁTICA EM CASOS ESPECIFICOS
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function (assunto) {
            return `${this.nome} está ${assunto}`
        },
        altura,
        peso,

        // // Finge ser um atributo
        // get imc() {
        //     const indice = this.peso / (this.altura ** 2);
        //     return indice.toFixed(2);
        // }, 

         // // Finge ser um atributo
        // set imc() {
        //     const indice = this.peso / (this.altura ** 2);
        //     return indice.toFixed(2);
        // }, 
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        
        //GETTER
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}` 
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    };
}


const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 32);
console.log(p1.fala('Falando sobre JS'));
console.log(p2.fala('Falando sobre eaeae'));
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc());
console.log(p1.nome + ' ' + p1.sobrenome);

//GETTER
console.log(p1.nomeCompleto);

//SETTER
p1.nomeCompleto = 'Maraaaia Oliveira Silva';
console.log(p1.nomeCompleto);


