const menuNavegacao = document.querySelectorAll('header nav a');

menuNavegacao.forEach((menu) =>{
    menu.addEventListener('click', () =>{
        removeClasseAtivada();
        menu.classList.add('ativa');
    })
})

function removeClasseAtivada(){
    menuNavegacao.forEach((menu) =>{
        menu.classList.remove('ativa');
    })
}


