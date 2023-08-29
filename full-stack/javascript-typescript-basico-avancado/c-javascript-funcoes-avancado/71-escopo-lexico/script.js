const nome = 'Luiz';

// de dentro da função, posso usar variaveis do escopo global
// escopo lexico | a funçao conhece o local onde  foi declarada, tudo que está 
// declarada nela e em seus vizinhos (bolha - no caso, seu pai... do pai, do pai... até chegar no escopo global)
function falaNome() {
    // const nome = 'Otávio';
    console.log(nome);
}

falaNome();

function usaFalaNome(){
    //como o pai de falaNome é o escopo global, então essa declaração irá falhar. Ou seja, não irá alterar para Otávio
    const nome = 'Otávio';

    falaNome();
}

usaFalaNome();