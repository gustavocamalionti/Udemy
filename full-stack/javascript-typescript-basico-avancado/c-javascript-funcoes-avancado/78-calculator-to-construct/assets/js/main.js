// OBS:: bind() FAZ COM QUE O THIS ASSUMA O VALOR ANTERIOR, QUANDO CHAMADO NO NOVO ESCOPO.
// OU SEJA, em cliquebotoes(){}.bind(this) força o this manter na calculadora ao invés de alterar para o document
// ARROWS FUNCTIONS NÃO PERMITE ALTERAÇÃO DO THIS, OU SEJA, NÃO É NECESSÁRIO USAR BIND NESSE CASO.
function CriaCalculadora() {

    this.display = document.querySelector('.display');

    this.inicia = function () {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = function () {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.realizaConta = function () {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };

    this.apagaUm = function () {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.clearDisplay = function () {
        this.display.value = '';
    };


    this.cliqueBotoes = function () {
        // this -> calculadora
        document.addEventListener('click', function (e) {
            // this -> document
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }

            this.display.focus();
        }.bind(this));
    };

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };
}

const calculadora = new CriaCalculadora();
calculadora.inicia();