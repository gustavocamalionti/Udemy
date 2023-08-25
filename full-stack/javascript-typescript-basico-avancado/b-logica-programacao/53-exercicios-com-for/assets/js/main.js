const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser!'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, //2
    {tag: 'section', texto: 'Frase 4'}, //3
];

const container = window.document.querySelector('.container'); // Seleciona apenas um elemento
const div = window.document.createElement('div');


for (let index = 0; index < elementos.length; index++) {
    let{tag, texto} = elementos[index];
    let tagElement = document.createElement(tag);
    tagElement.innerHTML = texto;
    div.appendChild(tagElement);
    console.log(tag,texto);
    
}

container.appendChild(div);