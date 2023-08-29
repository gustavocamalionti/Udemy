// IIFE -> Immediately invoked function expression
// No browser, queremos fugir do escopo global. Dess aforma, IIFE é uma forma de fugir do escopo.
(function() {
    const nome = 'Luiz';
    console.log(123456);
})();

(function(idade, peso, altura){
    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(nome){
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade,peso,altura);
})(30,80,1.80);


const nome = 'Qualquer coisa';
