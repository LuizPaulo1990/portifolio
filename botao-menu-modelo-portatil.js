let iconeMenu = document.querySelector('#menu-icone');

let iconeFechaMenu = document.querySelector('#butao-fecha-menu');

let iconeBarraNavegação = document.querySelector('.barra-navegacao');


function checaLargura(largura) {
    if (largura < 771) {
        return true;
    } else {
        return false;
    }
}


function abreMenu() {
    let largura = document.documentElement.clientWidth;
    if (checaLargura(largura)) {
        iconeBarraNavegação.style.display = 'block';
        iconeMenu.style.display = 'none';
        iconeFechaMenu.style.display = 'inline';
    }
}
iconeMenu.addEventListener('click', abreMenu);

function menuNavegação() {
    let largura = document.documentElement.clientWidth;
    if (checaLargura(largura)) {
        iconeBarraNavegação.style.display = 'none';
        iconeFechaMenu.style.display = 'none';
        iconeMenu.style.display = 'inline';

    }
}
iconeBarraNavegação.addEventListener('click', menuNavegação)


function fechaMenu() {
    let largura = document.documentElement.clientWidth;
    if (checaLargura(largura)) {
        iconeBarraNavegação.style.display = 'none';
        iconeMenu.style.display = 'inline';
        iconeFechaMenu.style.display = 'none';
    }
}
iconeFechaMenu.addEventListener('click', fechaMenu);
