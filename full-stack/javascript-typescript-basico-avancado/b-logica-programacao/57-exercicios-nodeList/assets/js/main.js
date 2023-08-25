const divParagrafo = window.document.querySelector('.paragrafos'); //querySelector retorna apenas o primeiro objeto encontrado

const paragrafos = divParagrafo.querySelectorAll('p'); // retorna uma nodeList (isso se comporta similar a um array, mas não é um array nativo JS.)

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;

console.log(backgroundColorBody);


for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#ffffff";
}

console.log(paragrafos.length);

