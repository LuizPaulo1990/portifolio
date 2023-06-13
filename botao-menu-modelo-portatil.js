let iconeMenu = document.querySelector('#menu-icone');

let iconeFechaMenu = document.querySelector('#butao-fecha-menu');

let iconeBarraNavegação = document.querySelector('.barra-navegacao');

console.log(iconeMenu);
console.log(iconeBarraNavegação);

iconeMenu.addEventListener('click',() => {
    iconeBarraNavegação.style.display='block';
    iconeMenu.style.display ='none';
    iconeFechaMenu.style.display = 'inline';
})

iconeBarraNavegação.addEventListener('click',() =>{
    iconeBarraNavegação.style.display='none';
    iconeFechaMenu.style.display = 'none';
    iconeMenu.style.display ='inline';

})

iconeFechaMenu.addEventListener('click',() =>{
    iconeBarraNavegação.style.display='none';
    iconeMenu.style.display ='inline';
    iconeFechaMenu.style.display = 'none';
})