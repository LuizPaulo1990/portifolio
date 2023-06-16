const botaoMudaTema = document.getElementById('checkbox');

const botaoMudaTemaPortatil = document.getElementById('checkbox-portatil');

const cabecalho = document.getElementById('cabecalho-pagina');

const conteudoPrincipal = document.getElementsByTagName('main');

const barraNavegação = document.getElementsByClassName('barra-navegacao')[0];

const menus = document.querySelectorAll('.menus');

const corpoProjeto = document.getElementsByTagName('body')[0];

const conteudoInicio = document.getElementsByClassName('inicio-conteudo')[0];

const informacaoContatos1 = document.getElementsByClassName('texto-contato1')[0];

const informacaoContatos2 = document.getElementsByClassName('texto-contato2')[0];

console.log(informacaoContatos1);
console.log(informacaoContatos2);


botaoMudaTema.addEventListener('change', () => {
    
    cabecalho.classList.toggle('header-claro');
    
    corpoProjeto.classList.toggle('tema-claro-corpo');

    conteudoInicio.classList.toggle('inicio-conteudo-claro');

    informacaoContatos1.classList.toggle('contato-tema-claro');

    informacaoContatos2.classList.toggle('contato-tema-claro');

      
})


botaoMudaTemaPortatil.addEventListener('change', () => {
    cabecalho.classList.toggle('header-claro');
    
    barraNavegação.classList.toggle('barra-navegacao-tema-claro');
    
    menus.forEach(menu => {
        menu.classList.toggle('menus-tema-claro');
    });

    corpoProjeto.classList.toggle('tema-claro-corpo');

    conteudoInicio.classList.toggle('inicio-conteudo-claro');

    informacaoContatos1.classList.toggle('contato-tema-claro');

    informacaoContatos2.classList.toggle('contato-tema-claro');
})




