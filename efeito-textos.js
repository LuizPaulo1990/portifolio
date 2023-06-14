/*=============Responsavel pelo efeito das divs virem de cima, abaixo,esquerda e direita=====================*/


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.inicio-conteudo, .cabecalho, .P2, .H1, .H2, .H3, .H4', { origin: 'top' });

ScrollReveal().reveal('.H5, .P5', { origin: 'bottom' });

ScrollReveal().reveal('.texto-contato1, .P1, .P4', { origin: 'left' });

ScrollReveal().reveal('.texto-contato2, .P3, .P6', { origin: 'right' });

/*============= efeito de escrever e apagar o texto selecionado=====================*/

const typed = new Typed('#multiple-text', {
    strings: ['Desenvolvedor Frontend'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})