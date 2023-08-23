function meuEscopo() {
    const form = document.querySelector('.form');
    const personals = [];
    const divContent = document.querySelector('#content');

    let contador = 1;
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.querySelector('#name');
        const lastName = form.querySelector('#lastName');
        const weightKg = form.querySelector('#weightKg');
        const heightM = form.querySelector('#heightM');

        personals.push(createPersonal(name, lastName, weightKg, heightM));
        divContent.innerHTML += `
        <div style="border: 2px solid blue">
        <p>Nome: <span class="divName">${personals[personals.length - 1].name.value}</span></p>
        <p>Sobrenome: <span class="divLastName">${personals[personals.length - 1].lastName.value}</span></p>
        <p>Peso(Kg): <span class="divWeightKg">${personals[personals.length - 1].weightKg.value}</span></p>
        <p>Altura(M): <span class="divHeightM">${personals[personals.length - 1].heightM.value}</span></p>
        </div>
        `

        console.log(personals);
        console.log(`Name: ${name.value} | Last Name: ${lastName.value} | Weight: ${weightKg.value}Kg | Height ${heightM.value}m`);
        // alert(`Seu formulário foi enviado com sucesso! ${contador}`);
        contador++;
    });
}

meuEscopo();

function createPersonal(name, lastName, weightKg, heightM) {
    return {
        name,
        lastName,
        weightKg,
        heightM
    };
}