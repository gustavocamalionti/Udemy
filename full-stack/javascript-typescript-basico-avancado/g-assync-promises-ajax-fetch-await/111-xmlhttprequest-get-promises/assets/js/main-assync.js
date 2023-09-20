const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        //Já terá recebido a resposta do servidor
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                //Método por callback
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
            }
        })
    })
}

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href
    }

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;
}

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag == 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})