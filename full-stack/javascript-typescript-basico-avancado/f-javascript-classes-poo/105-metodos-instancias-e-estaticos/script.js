function teste(){
    console.log('Este é meu teste');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    //Método de Instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar.');
    }

    static soma(x,y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

//Vai dar erro! método não é uma função acessível fora da classe, apenas dentro dela.
// controle1.trocaPilha();

// Vai funcionar! Porque só é acessível pela classe
// Quando não usa a palavra new, o construtor não é chamado e com isso nenhuma variável do construtor está definida
ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(2,4));


