const botaoMudaTema = document.getElementById('checkbox');

const botaoMudaTemaPortatil = document.getElementById('checkbox-portatil');

const cabecalho = document.getElementById('cabecalho-pagina');

const conteudoPrincipal = document.getElementsByTagName('main');


botaoMudaTema.addEventListener('change', () => {
    cabecalho.classList.toggle('header-claro');
    conteudoPrincipal.classList.toggle('main-tema-claro');

    
})


botaoMudaTemaPortatil.addEventListener('change', () => {
    cabecalho.classList.toggle('header-claro');
})




