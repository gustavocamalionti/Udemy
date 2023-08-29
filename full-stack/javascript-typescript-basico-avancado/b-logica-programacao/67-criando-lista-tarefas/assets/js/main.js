const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaItemLista() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaItemLista();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    limpaInput();
    salvarTarefas();
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);

    }

    //converte um elemento javascript em um formato json
    const tarefasJSON = JSON.stringify(listaDeTarefas);

    //local storage é uma mini base de dados no navegador
    localStorage.setItem('tarefas', tarefasJSON);

}

function adicionaTarefasSalvas() {
    //pega os itens armazenados em localStorage (navegador)
    const tarefas = localStorage.getItem('tarefas');

    //converte um json para um objeto javascript
    const listaDeTarefas = JSON.parse(tarefas);
   
    
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;

        criaTarefa(inputTarefa.value);
    }
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

