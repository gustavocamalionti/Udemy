const button = document.querySelector(".button-menu");
const menu = document.querySelector(".menuLateral");
const conteudoPrincipal = document.querySelector(".box-main");
button.addEventListener("click", MostrarMenu);

function MostrarMenu() {
    console.log("entrei na função")
     if (menu.classList.contains("menuLateral--hide")) {
        menu.classList.remove("menuLateral--hide");
        console.log("entrei no contem hide")
        menu.classList.add("menuLateral--show");
        conteudoPrincipal.classList.add("opacity-claro")
     } else {
        menu.classList.add("menuLateral--hide");
        console.log("entrei no não contem hide")
        conteudoPrincipal.classList.remove("opacity-claro")
     }
}

